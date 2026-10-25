# Переход на goryacheva.online

Основной origin: `https://goryacheva.online`.

`getSiteUrl()` всегда возвращает этот адрес. `NEXT_PUBLIC_SITE_URL`,
`VERCEL_PROJECT_PRODUCTION_URL`, Preview URL и входной Host больше не влияют
на metadataBase, canonical, OG/Twitter image URLs, JSON-LD, robots и sitemap.
Для применения нового origin нужна новая production-сборка.

## Редиректы

Штатные `redirects()` в `next.config.mjs` выполняются до рендера страницы,
работают в self-hosted Next.js 15 и сохраняют pathname и query parameters.
Host сопоставляется целиком; точки экранированы как литералы.

| Source host | Destination origin | Status |
|---|---|---|
| www.goryacheva.online | https://goryacheva.online | 308 |
| elena-goryacheva.vercel.app | https://goryacheva.online | 308 |
| goryacheva.online | без редиректа | обычный ответ страницы / 404 |
| Vercel Preview | без редиректа | обычный ответ страницы / 404 |
| elena-goryacheva-galina123.msk1.amvera.tech | правило не добавлено | обычный ответ страницы / 404 |

## Ограничение Amvera

`amvera.yaml` сохранён: Node 22, `npm run build`, `npm run start`, порт 3000.
В репозитории нет настроек HTTP Host для ingress и health-check.
[Amvera позволяет задавать Kubernetes probes отдельно](https://docs.amvera.ru/general/k8sprobe.html),
поэтому по одному YAML приложения нельзя подтвердить безопасность редиректа
технического hostname. Он намеренно не включён, как допускает ТЗ.
Все SEO-ссылки этого дубля всё равно указывают на основной домен.

Безопасный следующий шаг: проверить фактические настройки probes и передачу Host
в панели Amvera. Настроить публичный редирект технического домена на ingress,
сохранив внутреннюю проверку контейнера напрямую на порту 3000; либо после
подтверждения настроек добавить точное host-правило в приложение. Не определять
health-check по User-Agent и не отключать его вслепую.

## Проверено до PR

- `npm ci`, production audit (0 vulnerabilities), lint, 102 теста,
  typecheck и production build прошли.
- Реальный локальный `next start`: 19 страниц с canonical Host — HTTP 200,
  ровно один canonical на страницу, прежние Title/Description/H1,
  OG URL, OG/Twitter images, WebSite/Person URL и @id на новом домене.
- Старых Vercel/Amvera origins в HTML нет. robots разрешает индексацию;
  sitemap содержит ровно 19 прежних путей с новым origin.
- 20 GET/HEAD запросов к www и старому Vercel проверили 308 и сохранение
  pathname/query, включая повторяющиеся query keys и неизвестный путь.
- 6 вариантов Host, включая основной, Preview, localhost и технический Amvera,
  не попадают под правило. Неизвестный URL основного Host возвращает HTTP 404.
- Страница «Логика материалов» открыта в браузере из production-сборки.
- Локальный build проверен с Node 24.19.0; Node 22 в Amvera и CI не менялся.

Это проверка кода и локального production runtime с HTTP Host headers,
а не подтверждение уже состоявшейся миграции на реальном Amvera production.

## Проверки после merge и новой сборки на Amvera

- Все 19 URL на реальном `https://goryacheva.online`: HTTP 200, один canonical,
  прежние Title/Description/H1, новые OG/Twitter и JSON-LD URL.
- `/robots.txt`: Allow `/`, Host и Sitemap нового домена.
- `/sitemap.xml`: те же 19 путей, только новый origin; lastmod не переработан.
- HTTPS/TLS для основного и www домена, HTTP → HTTPS на уровне хостинга.
- Реальные www и старый production Vercel: 308 с тем же pathname/query,
  включая вложенный URL и отсутствующую страницу; неизвестный canonical URL — 404.
- На Amvera входной публичный Host должен сохраняться при проксировании.
- Старый Vercel должен получить эту версию production-сборки для включения его 308.
- Probes и технический домен Amvera проверить отдельно до включения его редиректа.

DNS, production deployment, Вебмастер и аналитика этим PR не настраиваются.
