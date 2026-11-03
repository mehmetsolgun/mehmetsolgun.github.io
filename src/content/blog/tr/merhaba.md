---
pair: merhaba
title: "Merhaba: 5′ ucundan başlarken"
description: "Bu site neden var, burada neler paylaşacağım ve tasarımdaki küçük biyoloji şakaları."
date: 2026-11-03
tags: [duyuru, doktora]
---

Merhaba, ben Mehmet. 2026'da Hatay Mustafa Kemal Üniversitesi Veteriner Fakültesinden mezun oldum ve aynı yıl Moleküler Biyokimya ve Genetik doktorasına başladım. Bu site, doktora yolculuğumun açık bir laboratuvar defteri olsun istedim.

## Burada neler olacak?

Öğrendikçe not alacağım ve bu notları paylaşacağım. Odak konularım şimdilik şunlar:

- RNA biyolojisi ve transkripsiyonun düzenlenmesi
- RT-qPCR ile gen ifadesi analizi
- MikroRNA'lar ve gen regülasyonu
- Biyoinformatik araçlar ve veri analizi

Okuduğum makalelerden kısa özetler, yöntem notları ve zamanla kendi çalışmalarım da buraya eklenecek.

## Tasarım hakkında küçük bir not

Sitenin üstündeki çubuk bir **kromozom ideogramı**. Her sayfa ayrı bir kromozom; kırmızı pencere sayfanın neresinde olduğunuzu gösteriyor, tıklayıp sürükleyerek gezinebilirsiniz.

Ana sayfadaki sarmalın altındaki dizi ise adımı kodluyor:

```text
5′–ATG GAA CAT ATG GAA ACT TCT TAG CTG GGT TGA AAT TAA–3′
    M   E   H   M   E   T   S   O   L   G   U   N   *
```

Adım ATG ile, yani başlangıç kodonuyla başlıyor. Asıl ilginç kısım "Solgun"daki **O** ve **U**: bu harfler standart 20 amino asidin tek harf kodlarında yok. Ama doğada ikisi de var. **O** pirolizin, **U** selenosistein; ikisi de normalde stop kodonu olan UAG (amber) ve UGA (opal) kodonlarının özel koşullarda yeniden kodlanmasıyla proteine katılıyor. Adım bu yüzden tam olarak yazılabiliyor.

Ana sayfadaki `transcribe()` düğmesi DNA'yı mRNA'ya çeviriyor (T → U), `translate()` ise mRNA'yı amino asitlere.

Okuduğunuz için teşekkürler. Soru ve önerileriniz için [iletişim](/contact/) sayfasından bana ulaşabilirsiniz.
