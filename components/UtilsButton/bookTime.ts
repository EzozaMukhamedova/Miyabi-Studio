// utils/bookTime.ts

export interface BookingPayload {
  time: string;
  // boshqa kerakli fieldlarni ham qo‘shing (ism, telefon, va h.k.)
}

export async function sendBooking(payload: BookingPayload) {
  const res = await fetch('http://10.20.1.76:8000/api/send/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Bron qilishda xatolik yuz berdi');
  }
  return res.json();
}
