'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Tip_Song.module.css';
import { IoIosArrowRoundBack } from "react-icons/io";

export default function TipSinger() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!amount || parseInt(amount) <= 0) {
      alert('กรุณาใส่จำนวนเงินที่ต้องการทิป');
      return;
    }
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert('กรุณาใส่จำนวนเงินที่ถูกต้อง');
      return;
    }


    // คุณสามารถส่ง name และ message ไปด้วย
    router.push('/PaymentTip');
  };


  return (
    <div className={styles.container}>
      <button onClick={() => router.push('/')} className={styles.backButton}>
        <IoIosArrowRoundBack />
      </button>

      <h1 className={styles.title}>ทิปนักร้อง</h1>
            
      <input
        type="text"
        inputMode="decimal"
        placeholder="ใส่จำนวนเงิน (฿)"
        className={styles.amountInput}
        value={amount}
        onChange={(e) => {
          const value = e.target.value;
          const regex = /^(?!0\d)(?!\.)(\d+)(\.\d{0,2})?$/;
          if (value === '' || regex.test(value)) {
            setAmount(value);
          }
        }}
      />





      <input
        type="text"
        placeholder="ชื่อผู้ให้ทิป (ไม่บังคับ)"
        className={styles.nameInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className={styles.messageBox}
        placeholder="ฝากข้อความถึงนักร้อง (ไม่บังคับ)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className={styles.tipButton} onClick={handleSubmit}>
        ยืนยันการทิป
      </button>
    </div>
  );
}
