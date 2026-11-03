---
title: "RT-qPCR'da 2^−ΔΔCt yöntemi: kısa bir not"
description: "Göreli gen ifadesi hesabının mantığı, varsayımları ve küçük bir örnek."
date: 2026-11-03
tags: [RT-qPCR, gen ifadesi, yöntem]
draft: true
---

RT-qPCR'da göreli gen ifadesini hesaplamanın en yaygın yolu Livak ve Schmittgen'in (2001) **2^−ΔΔCt** yöntemidir. Mantığı basit: hedef genin Ct değerini önce bir referans genle, sonra kontrol grubuyla normalize ederiz.

## Adımlar

1. Her örnek için hedef geni referans gene göre normalize et:

$$
\Delta C_t = C_{t,\text{hedef}} - C_{t,\text{referans}}
$$

2. Deney grubunu kontrol grubuna göre normalize et:

$$
\Delta\Delta C_t = \Delta C_{t,\text{deney}} - \Delta C_{t,\text{kontrol}}
$$

3. Kat değişimini hesapla:

$$
\text{Kat değişimi} = 2^{-\Delta\Delta C_t}
$$

## Küçük bir örnek

| Grup | Ct (hedef) | Ct (referans) | ΔCt |
|---|---|---|---|
| Kontrol | 24,0 | 18,0 | 6,0 |
| Deney | 22,0 | 18,0 | 4,0 |

$\Delta\Delta C_t = 4{,}0 - 6{,}0 = -2{,}0$, dolayısıyla kat değişimi $2^{2} = 4$: hedef gen deney grubunda yaklaşık 4 kat daha fazla ifade ediliyor.

## Dikkat edilmesi gerekenler

- Yöntem, hedef ve referans genin amplifikasyon verimliliğinin yaklaşık %100 ve birbirine yakın olduğunu varsayar. Verimlilikler farklıysa Pfaffl yöntemi gibi verimliliği hesaba katan bir model daha uygundur.
- Referans genin deney koşullarında gerçekten sabit ifade edildiği doğrulanmalıdır; mümkünse birden fazla referans gen kullanılmalıdır.
- Deney tasarımı ve raporlama için MIQE kılavuzu iyi bir kontrol listesidir.
