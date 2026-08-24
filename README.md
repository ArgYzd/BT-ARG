# BT ARG 🎾

سامانه مدیریت و رزرو سانس زمین تنیس ساحلی **BT ARG**.

> پروژه با هدف ارائه یک تجربه فارسی، RTL، سریع و مدرن برای رزرو زمین، مدیریت مجموعه و اتصال به Telegram Mini App ساخته می‌شود.

## چشم‌انداز

- وب‌اپ فارسی و RTL با تم تیره مدرن
- تقویم شمسی و رزرو آنلاین سانس
- حساب کاربری و مدیریت رزروها
- پنل مدیریت مجموعه
- Telegram Mini App و ربات تلگرام
- اعلان‌های خودکار
- گزارش‌های مدیریتی
- معماری آماده برای پرداخت، کیف پول، VIP، مسابقات و قابلیت‌های هوش مصنوعی

## معماری نسخه اول

- **Frontend:** React + Vite + TypeScript
- **UI:** Tailwind CSS
- **API:** Cloudflare Workers
- **Database:** Cloudflare D1
- **Telegram:** Bot API + Mini Apps
- **CI/CD:** GitHub Actions

## ساختار

```text
apps/web       وب‌اپ اصلی
apps/admin     پنل مدیریت
apps/miniapp   Telegram Mini App
apps/bot       ربات تلگرام
packages/*     کدهای مشترک
server/*       API و سرویس‌های Backend
docs/*         مستندات پروژه
.github/*      CI/CD
```

## وضعیت

🚧 نسخه 0.1 — اسکلت پروژه و معماری اولیه.

## اصول توسعه

1. فارسی و RTL از ابتدا
2. Mobile-first
3. امنیت و اعتبارسنجی سمت سرور
4. عدم قرار دادن Secret در Git
5. تست‌پذیری و توسعه مرحله‌ای
6. حفظ سازگاری معماری با نسخه‌های بعدی

## مجوز

MIT