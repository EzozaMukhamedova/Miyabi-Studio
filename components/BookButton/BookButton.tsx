// components/BookButton.tsx

import React, { useState } from 'react';
import classNames from 'classnames';
import { sendBooking } from '../UtilsButton/bookTime';

interface BookButtonProps {
  selectedTime: string | null;
  // boshqa props kerak bo‘lsa, qo‘shing (masalan, ism, telefon)
}

const BookButton: React.FC<BookButtonProps> = ({ selectedTime }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleBook = async () => {
    if (!selectedTime) return;

    setLoading(true);
    setMessage(null);

    try {
      // Hozircha faqat vaqt (selectedTime) yuborilyapti, boshqa fieldlar ham kerak bo‘lsa, payload’ga qo‘shing
      const res = await sendBooking({ time: selectedTime });
      setMessage('Bron qilish muvaffaqiyatli yakunlandi!');
    } catch (error: any) {
      setMessage(error.message || 'Bron qilishda xatolik!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className={classNames(
          "w-full py-2 rounded-lg font-semibold transition-colors text-white mt-2 cursor-pointer",
          selectedTime
            ? "bg-[#e47c48] hover:bg-[#cf703d] shadow"
            : "bg-[#edd1c0] cursor-not-allowed"
        )}
        disabled={!selectedTime || loading}
        onClick={handleBook}
      >
        {loading ? 'Yuborilmoqda...' : 'Bron qilish'}
      </button>
      {message && (
        <div className="mt-2 text-sm text-center text-green-600">{message}</div>
      )}
    </div>
  );
};

export default BookButton;
