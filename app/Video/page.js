'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Picture.module.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";



const timeOptions = [
  { time: 40, price: 79 },
  { time: 60, price: 99 },
  { time: 80, price: 129 },
];

const captions = [
  'โสดแล้วแซ่บ มาจีบได้ ดื่มเก่งด้วย!',
  'อย่ามองนาน เดี๋ยวหลงรักไม่รู้ตัว',
  'เหล้ามีรสขม แต่คนตรงนี้มีรสหวาน',
  'หน้าไม่หวาน แต่นั่งด้วยแล้วมันส์แน่นอน',
  'อย่ามองนาน เดี๋ยวหลงรักไม่รู้ตัว',
  'เหล้ามีรสขม แต่คนตรงนี้มีรสหวาน',
  'ไม่ได้เจ้าชู้ แค่ดูเฟรนด์ลี่เวลาเมา',
  'เปิดใจง่ายเหมือนเปิดขวดเลยล่ะคืนนี้',
  'คนดีๆ มีอยู่ในร้านเหล้า...เชื่อสิ!',
  'โต๊ะข้างๆ ว่างนะ แต่ว่าใจเราว่างกว่า',
  'มองได้ แต่อย่าหายไปไหนนะ',
  'ถ้าเธอกล้า เราก็พร้อมชนแก้ว',
  'ดื่มไม่เก่ง แต่รักจริงนะบอกเลย',
  'เบียร์เย็นๆ ยังไม่เท่าไหล่เธอที่อบอุ่น',
  'สเปคไม่ตายตัว แต่อยู่ในร้านนี้แน่นอน',
  'มองตาแล้วจะรู้ว่า “จองโต๊ะ” หรือ “จองใจ”',
  'คืนนี้ไม่อยากเมา แต่อยากมีคนคุย',
  'อยากได้คนคุมร้าน หรือคนคุมใจดีล่ะ?',
  'สั่งเหล้าได้จากบาร์ แต่สั่งใจได้จากเรา',
  'ตามมา Follow IG เราได้ที่',
  'ส่อง IG เราสิ แล้วจะติดใจ 😉',
  'อยากรู้จักกันมากขึ้น? Follow IG เลย',
  'IG นี้มีแต่เรื่องสนุก!',
  'สายปาร์ตี้ แวะมาส่อง IG เราหน่อย',
  'เปิดวาร์ปมาที่',
  'My IG - Follow for good vibes!',
  'คืนนี้ใครโสด ชนแก้ว! 🥂',
  'ทักทายกันได้นะ ไม่กัด! 😊',
  'หาเพื่อนชนแก้ว/คุยเล่น',
  'โต๊ะนี้ยังว่าง...รอคนข้างๆ มา Follow',
  'มองจอแล้วยิ้มให้หน่อยสิ 😉',
  'ทีมงานคุณภาพ (โต๊ะนี้) พร้อมบวก!',
  'คนน่ารักมักจะขึ้นจอนี้',
  'ขึ้นจอสักหน่อย เผื่อมีคนแอบปิ๊ง!',
  'ชนแก้วออนไลน์ผ่านสตอรี่กัน',
  'แวะมาทักทายชาวแก๊งค์หน่อย'
];

export default function VideoPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState('');
  const [videoDuration, setVideoDuration] = useState(0);
  const [igName, setIgName] = useState('');


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('video/')) {
      alert('กรุณาเลือกเฉพาะไฟล์วิดีโอ');
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handlePayment = () => {
    if (!selectedFile) {
      alert('กรุณาเลือกวิดีโอก่อน');
      return;
    }
    if (!selectedTime) {
      alert('กรุณาเลือกเวลา');
      return;
    }
    if (!selectedCaption) {
      alert('กรุณาเลือกข้อความแคปชั่น');
      return;
    }
    if (!igName.trim()) {
    alert('กรุณาใส่ชื่อ Instagram');
    return;
    }

    router.push('/PaymentVideo');
  };

  return (
    <div className={styles.container}>
      <button onClick={() => router.push('/')} className={styles.backButton}>
        <IoIosArrowRoundBack />
      </button>
      <h1 className={styles.title}>ส่งวิดีโอขึ้นจอ</h1>

      <div className={styles.timeOptions}>
        {timeOptions.map((opt) => (
          <button
            key={opt.time}
            className={`${styles.timeButton} ${selectedTime === opt.time ? styles.active : ''}`}
            onClick={() => setSelectedTime(opt.time)}
          >
            <span className={styles.time}>{opt.time} วินาที</span>
            <span className={styles.price}>{opt.price}฿</span>
          </button>
        ))}
      </div>

      <div className={styles.uploadBox}>
        {previewUrl && (
          <video 
            src={previewUrl}
            controls
            autoPlay
            muted
            loop
            onLoadedMetadata={(e) => setVideoDuration(e.target.duration)}
            className={styles.previewVideo}
          />

        )}

        <label htmlFor="uploadInput" className={styles.placeholder}>
          <TbHandClick className={styles.clickIcon} />
          <p>อัปโหลดวิดีโอ</p>
        </label>

        <input
          id="uploadInput"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      <div className={styles.igWrapper}>
            <FaInstagram className={styles.igIcon} />
            <input
              type="text"
              placeholder="Instagram"
              className={styles.igInput}
              value={igName}
              onChange={(e) => setIgName(e.target.value)}
            />
          </div>

      <select
        value={selectedCaption}
        onChange={(e) => setSelectedCaption(e.target.value)}
        className={styles.captionSelect}
      >
        <option value="" disabled hidden>เลือกข้อความ</option>
        {captions.map((cap, idx) => (
          <option key={idx} value={cap}>{cap}</option>
        ))}
      </select>

      <button className={styles.paymentButton} onClick={handlePayment}>
        ชำระเงิน
      </button>
    </div>
  );
}
