# معماری BT ARG

## لایه‌ها

### Client
- Web App
- Admin Panel
- Telegram Mini App

### API
Cloudflare Workers با routeهای جدا برای auth، users، courts، slots، bookings، admin و notifications.

### Data
Cloudflare D1 برای داده‌های تراکنشی و رابطه‌ای. طراحی schema باید از ابتدا چندزمین، چندمدیر و رزرو گروهی را قابل توسعه نگه دارد.

### Telegram
ربات تلگرام برای اعلان‌ها و ورود به Mini App استفاده می‌شود. Webhook روی Cloudflare Workers قرار می‌گیرد.

## اصول

- Server-side validation
- RBAC برای مدیر و کاربر
- Idempotency برای رزرو و پرداخت‌های آینده
- Audit log برای عملیات مدیریتی
- UTC در ذخیره‌سازی زمان و تبدیل به timezone مجموعه در UI
- Persian calendar فقط در لایه نمایش و ورودی
