---
pair: canine-esr1-mir18a-reporter
title: "miR-18a ve miR-19a köpek ESR1 3'UTR raportörünü susturdu, hücre hatları ise karışık konuşuyor"
description: "Köpek meme tümörü hücrelerinde miR-18a ve miR-19a bir ESR1 raportörünü baskıladı; endojen ESR1 ile miRNA düzeyleri arasındaki ilişki ise tutarsız kaldı."
date: 2026-11-06
tags: [köpek, mirna, meme tümörü, esr1, qpcr]
draft: false
---

Dört köpek meme tümörü hücre hattından üçünde ESR1 mRNA'sı, sağlıklı meme epitel hücrelerine göre 9, 26 ve 70 kat daha düşük çıkıyor. Dördüncü hat, CMT12, aynı karşılaştırmada 14,9 kat daha yüksek. Auburn Üniversitesi Veteriner Fakültesinden Goyal ve Bird'ün Veterinary Sciences dergisinde yayımlanan çalışması (Goyal ve Bird, 2026) bu dağınık tabloyu miRNA'larla açıklamayı deniyor. Hedefleri, östrojen reseptörü alfayı (ERα) kodlayan ESR1'in 3' çevrilmeyen bölgesini (3'UTR) miR-18a ve miR-19a'nın susturup susturamadığını görmek.

Cevap bir kuyucuk içinde "evet". Hücre hatlarının kendisi ise o kadar net konuşmuyor. Yazının konusu bu iki cevap arasındaki mesafe.

## Dört hat, dört ayrı ESR1 tablosu

Çalışmada CMT12 (kaniş adenokarsinomu), CMT27 (Alman kurdu karsinomu), CMT28 (melez köpek adenokarsinomu) ve CMT47 (minyatür şnauzer adenokarsinomu) hatları kullanıldı. Karşılaştırma kontrolü, tek bir Beagle'ın meme dokusundan elde edilen normal canine mammary epithelial cell (CMEC) kültürüydü. Bu ayrıntı ilk bakışta sıradan görünüyor, ama aşağıda göreceğimiz gibi sonuçların ağırlığını taşıyan bir yük.

ESR1 mRNA'sı RT-qPCR ile ölçüldü; miR-18a ve miR-19a için LNA tabanlı kitler kullanıldı. ΔCt değerleri, hücre hattını sabit etki, deney tekrarını rastgele kesişim olarak alan doğrusal karma modelle analiz edildi ve kat değişimleri $2^{-\Delta\Delta C_t}$ yöntemiyle hesaplandı. CMT27, CMT28 ve CMT47'de ESR1 CMEC'e göre sırasıyla yaklaşık 9, 26 ve 70 kat daha düşüktü. CMT12'de ise 14,9 kat yüksekti.

Beklenti basitti: ESR1'i baskılayan miRNA'lar varsa, ESR1'in en düşük olduğu hatlarda en yüksek olmaları gerekirdi. Öyle olmadı. miR-18a yalnızca CMT27'de anlamlı yükseldi (8,49 kat, düzeltilmiş p = 0,0172), miR-19a da yalnızca CMT27'de (8,84 kat, düzeltilmiş p = 0,0049). CMT12'de iki miRNA da sayısal olarak yüksekti (miR-18a 5,10 kat, miR-19a 3,76 kat) ama anlamlılığa ulaşmadı; ESR1 ise o hatta yüksek kalmıştı. En düşük ESR1'e sahip CMT47'de miRNA'lar anlamlı yükselmedi.

Yazarlar bu tutarsızlığı dürüstçe yazıyor: iki miRNA'nın tek başına ESR1 farklarını yalnızca kısmen açıklayabileceğini, başka düzenleyicilerin devreye girmiş olabileceğini belirtiyorlar. CMT27 tek hat olarak beklenen deseni gösteriyor, yani ESR1 düşük, iki miRNA yüksek. Ben bu hattı bir sonraki deney için en doğal aday olarak görüyorum; birazdan buna dönüyorum.

Raportör deneyi için seçilen hat ise tam tersi bir uçta duruyor. CMT28'de ESR1, CMEC'e göre 26 kat düşük (düzeltilmiş p = 0,0009), oysa miR-18a 1,79 kat, miR-19a ise 1,05 kat; ikisi de anlamlı değil. Yani raportör deneyinin yapıldığı hücrede, ESR1 kaybını bu iki miRNA'nın açıklaması pek mümkün görünmüyor. Bu hattın seçilme nedeni zaten düşük endojen miRNA düzeyiydi: dışarıdan eklenen miRNA'nın etkisini görmek için temiz bir zemin. Deney tasarımı açısından mantıklı bir seçim. Ama aynı seçim, CMT28'deki ESR1 kaybının başka bir mekanizmadan geldiğini de söylüyor. CMT47 de benzer: ESR1 70 kat düşük, miR-18a 3,60 kat, miR-19a 1,75 kat yüksek, ikisi de anlamlı değil.

## Bir kuyucukta işleyen susturma

Raportör deneyi için ekip, ESR1 3'UTR'sinin üç parçasını tek bir yapıda birleştirdi: toplam 859 baz çiftlik bir ekleme. Bu parçalar miR-18a ve miR-19a için öngörülen tohum eşleşme bölgelerini taşıyordu. Yapı, salgılanan bir Gaussia lusiferazı geninin ardına klonlandı. Bir de aynı yapının mutant hali vardı: üç tohum bölgesinin silindiği, 837 baz çiftlik versiyon.

Yapının ESR1 3'UTR'sinin ne kadarını temsil ettiğini görmek için TargetScan konumlarına bakmak yeterli. miR-18a için korunmuş siteler 1817-1824 ve 4047-4053 konumlarında, zayıf korunmuş bir site 650-656'da; miR-19a için korunmuş siteler 3585-3591 ve 4044-4050'de. Yani 3'UTR en az 4 bin baz çifti uzunluğunda ve yapıdaki üç parça (308, 307 ve 244 baz çifti) bunun küçük bir bölümünü kapsıyor. Üçüncü parça iki miRNA için örtüşen siteleri birlikte taşıyor, çünkü 4044-4053 aralığında miR-18a ve miR-19a siteleri üst üste biniyor. Mutantta üç sitenin hepsi birden silindiği için, hangi sitenin etkiyi taşıdığı da bu deneyle ayrışmıyor.

Deney CMT28 hücrelerinde yapıldı. Lusiferaz aktivitesi, transfeksiyon verimliliğini düzeltmek için salgılanan alkalen fosfataz (SEAP) aktivitesine bölündü; yalnızca raportör verilen koşul 1 kabul edildi.

Vahşi tip yapıda miR-18a, kontrol miRNA'ya göre ortalama 0,397 birim aktivite düşüşü yaptı (%95 GA −0,717 ile −0,077; p = 0,0334). miR-19a'da düşüş 0,428 birimdi (%95 GA −0,609 ile −0,248; p = 0,0094). Mutant yapıda ikisi de etkisizdi: miR-18a için fark +0,078 (p = 0,3467), miR-19a için +0,004 (p = 0,9617). Yapı ile miRNA arasındaki etkileşim anlamlıydı (F(2,4) = 17,89; p = 0,0101). Yabanıl tip ile mutantı doğrudan karşılaştıran iki test, Holm düzeltmesinden sonra 0,0492'de kaldı (ham değerler miR-18a için 0,0391, miR-19a için 0,0246). Üç bağımsız çalışmayla bu, eşiğin hemen altında duran bir sonuç; tek bir çalışmanın başka yöne kayması bile tabloyu değiştirebilir.

Antisens inhibitörler (anti-miR) aktiviteyi kısmen geri getirdi: anti-miR-18a için +0,205, anti-miR-19a için +0,279 birim. Kurtarma kısmi kaldı; tam bir geri dönüş olsaydı kanıt daha güçlü olurdu.

Mutant kontrol bu çalışmanın en değerli parçası. Tohum bölgesini silince etkinin tamamen kaybolması, susturmanın öngörülen bölgelere bağlı olduğunu gösteriyor. Bunu bir hedef tahmin programının çıktısından ayıran şey tam olarak bu.

Yazarlar ölçtükleri şeyin ESR1'in tamamı olmadığını açıkça söylüyor. Yapıdaki parçalar 3'UTR'nin seçilmiş bölgeleri; "-WT" etiketi de özgün dizinin tümünü değil, seçilen parçaları anlatıyor. Raportör deneyi endojen ESR1 mRNA'sının ya da ERα proteininin bu miRNA'larla azaldığını göstermiyor.

## Referans gen, kontrol ve üç tekrar

Aşağıdaki eleştirilerin neredeyse tamamı, yazarların kendi limitasyon paragrafında zaten kabul ettiği noktalardan çıkıyor.

miRNA qPCR'ında normalizasyon için U6 snRNA kullanılmış. Gerekçe, önceki bir köpek meme tümörü çalışmasında kullanılmış olması. mRNA tarafında da benzer bir durum var: seçilen referans gen daha önceki hücre hattı çalışmalarına dayanıyor. Yazarlar mRNA referansının kararlılığını geNorm ya da NormFinder gibi bir araçla diğer adaylarla karşılaştırmadıklarını belirtiyor. Bana kalırsa normalizasyonun en zayıf halkası bu. ΔCt'ye dayalı her sonuç referansın kararlılığına yaslanır ve kararlılık hücre hatları arasında test edilmediyse, ESR1'deki 70 katlık farkın bir kısmı referansın sürüklenmesinden doğmuş olabilir. Bu bir kanıt değil, bir olasılık; ama MIQE yönergelerinin tam olarak engellemeye çalıştığı belirsizlik bu (Bustin ve ark., 2009). Yönergelerin özü, okuyucunun sonucu değerlendirebilmesi için tüm deneysel koşulların ve analiz yöntemlerinin açık verilmesi. Burada sorun açıklıkta yok; kararlılık testinin yapılmamış olmasında. miRNA qPCR'ında verinin normalizasyonu başlı başına teknik bir zorluk olarak ele alınıyor (Benes ve Castoldi, 2010).

Sayılarla bakınca risk somutlaşıyor. 70 katlık fark yaklaşık 6,1 döngülük bir ΔΔCt'ye denk geliyor (log₂ 70 ≈ 6,13). Referansın hücre hatları arasında bir döngü kayması, hesaplanan kat değişimini iki katına çıkarır ya da yarıya indirir. Üstelik $2^{-\Delta\Delta C_t}$ hesabı her döngüde ürünün tam iki katına çıktığını varsayıyor. Yazarların kendi standart eğrileri farklı bir şey söylüyor: amplifikasyon verimi iki mRNA reaksiyonunda yüzde 104,6 ve 105,3, miR-18a'da 105,1, ama miR-19a'da 90,4 ve U6'da 91,9. Verim yüzde 90 olunca her döngü ürünü 1,90 kat artırır. Üç döngülük bir fark bu durumda 8 kat yerine yaklaşık 6,9 kat eder. Bu basit bir aritmetik; sonuçları geçersiz kılmıyor, ama miR-19a için hesaplanan katların büyüklüğünü biraz oynatır. Yöntemde RNA bütünlüğüne dair bir değer (örneğin RIN) de göremedim; saflık için yalnızca 1,8 ile 2,0 arasında bir A260/A280 oranı ölçütü verilmiş.

Bir karşılaştırma işe yarıyor. Sahiwal boğalarında seminal plazma vezikülü miRNA'larını inceleyen Chauhan ve arkadaşları, referans adayı olarak değerlendirdikleri miR-23a, miR-26a ve U6'yı farklı biyolojik örneklerdeki düşük kararlılıkları nedeniyle RefFinder ile elemişti (Chauhan ve ark., 2024). U6 bir kez bu sınavdan geçemediyse, başka bir doku ve türde geçeceğini varsaymamak gerekir.

İkinci eksik, anti-miR deneyinde hedef dışı kontrol oligonükleotidinin kullanılmaması. Anti-miR eklendiğinde aktivite arttı; ama ek bir oligonükleotid ve transfeksiyon işlemi tek başına aktiviteyi artırıyor olabilir. Yazarlar bunu açıkça kabul ediyor.

Üçüncüsü, miRNA ekspresyon vektörlerinin doğrulanması. Vektörlerde miRNA öncülü ile floresan protein (eGFP ya da mCherry) aynı promotordan ifade ediliyor. Floresan görmek vektörün çalıştığına dair dolaylı bir kanıt veriyor; olgun miR-18a ve miR-19a düzeyleri ise doğrudan ölçülmedi. Anti-miR etkinliği de ölçülmedi.

Dördüncüsü, örneklem. Raportör deneyleri üç bağımsız çalışmadan oluşuyor; her çalışmada koşul başına iki kuyucuk, her kuyucuk iki kez okunmuş. İstatistiksel birim çalışma, yani n = 3. Güven aralıklarının geniş olması bundan: miR-18a'nın etkisinin %95 GA'sı −0,717 ile −0,077 arasında, yani alt sınır neredeyse sıfıra yaklaşıyor. Normal kontrol ise tek bir köpekten gelen CMEC. Hücre hatlarının kimlik doğrulaması bu çalışmada yapılmamış, rutin mikoplazma testi de yapılmamış.

Bunlar çalışmayı geçersiz kılmıyor, ama sonuca "kanıt" yerine "ilk işaret" demeyi gerektiriyor.

Adil olmak gerekirse deney tarafında iyi yapılmış şeyler de var. Her qPCR çalışmasına ters transkriptaz içermeyen (no-RT) ve şablonsuz kontroller konmuş, eriyik eğrisi alınmış ve ESR1 amplikonu Sanger dizilemesiyle doğrulanmış. Hücre hatları 20 ile 50. pasajlar arasında kullanılmış, CMEC ise 15. pasajın altında tutulmuş. Eksik kalan, bu titizliğin referans seçimine ve kontrol oligonükleotidine uzanmaması.

## İnsan literatüründe aynı eksen

miR-18a'nın insan meme kanserindeki rolü, hormon reseptörü durumuna göre değişiyor görünüyor. Nair ve arkadaşları (2024), ER-negatif tümörlerde miR-18a'nın düşük olduğunu ve bu düşüşün hibrit epitel-mezenkimal hücrelerin zenginleşmesiyle ilişkili olduğunu bildiriyor; çalışma miR-18a'nın rolünün hormon reseptörü durumuna göre alt tipe özgü olduğunu savunuyor. Dolayısıyla miR-18a için tek yönlü bir "ERα baskılayıcısı" rolü çizmek zor.

Başka dokularda ESR1 ile miR-18a arasında ters ilişki görülüyor. Koźniewski ve arkadaşlarının (2022) obez bireylerin yağ dokusunda yaptığı çalışmada ESR1 mRNA'sı, hsa-miR-18a-5p ile negatif korelasyon gösterdi (rs = −0,444). Mesane kanserinde 118 hastanın dokularında miR-18a-5p yüksek, ESR1 düşüktü ve çift lusiferaz deneyi miR-18a-5p'nin ESR1'i doğrudan hedeflediğini gösterdi (Gao ve ark., 2026). Yağ dokusunda ve mesanede ters ilişki var, ER-negatif meme tümörlerinde miR-18a düşük. Köpek hatlarındaki karışıklığa şaşırmak için pek neden yok.

Köpek meme tümörlerinde miRNA'ların tanı ve prognoz belirteci olarak değerlendirildiği derleme (Ferreira ve ark., 2024), alandaki sınırlılıkları ve bulguların klinik uygulamaya taşınması için gereken çalışmaları vurguluyor. Goyal ve Bird'ün makalesi de aynı çizgide kalıyor: yazarlar bu miRNA'ların tanı ya da tedavi için kullanılabileceğini ileri sürmüyor, bunun daha fazla doğrulama gerektirdiğini yazıyor. Aynı ekibin önceki çalışmasında dolaşımdaki miR-18a'nın lenfatik invazyonla ilişkili olarak yüksek çıktığı belirtilmiş; o nedenle bu miRNA'ya duyulan ilgi anlaşılır.

Bir ayrıntı, yöntemin kendisiyle ilgili ve atlamak istemedim. Kullanılan anti-miR'ler insan miRNA'ları için tasarlanmış, ama olgun miR-18a-5p ve miR-19a-3p dizileri insan ve köpekte aynı. Bu yüzden inhibitörler köpek miRNA'larını da tamamlıyor. Dizi korunumu, türler arası deneyi pratik kılan nadir kolaylıklardan biri.

Sıradaki deney yazarların da önerdiği gibi, endojen ESR1'in miRNA inhibisyonuyla geri gelip gelmediğine bakmak. CMT27 bunun için doğal aday: ESR1 düşük, iki miRNA anlamlı yüksek. Orada anti-miR endojen ESR1'i yükseltirse, raportör sonucu bir hücrenin içine taşınmış olacak. Yükseltmezse, kuyucuktaki susturma ile tümördeki susturma arasındaki mesafe yeniden ölçülecek.

## Kaynaklar

1. Goyal D, Bird RC. (2026). MicroRNA regulation of the estrogen receptor alpha 3′UTR in canine mammary tumor (CMT28) cells. *Veterinary Sciences*, 13(10), 1071. [doi:10.3390/vetsci13101071](https://doi.org/10.3390/vetsci13101071) · PMID: 42944166
2. Bustin SA, Benes V, Garson JA ve ark. (2009). The MIQE guidelines: minimum information for publication of quantitative real-time PCR experiments. *Clinical Chemistry*, 55(4), 611-622. [doi:10.1373/clinchem.2008.112797](https://doi.org/10.1373/clinchem.2008.112797) · PMID: 19246619
3. Benes V, Castoldi M. (2010). Expression profiling of microRNA using real-time quantitative PCR, how to use it and what is available. *Methods*, 50(4), 244-249. [doi:10.1016/j.ymeth.2010.01.026](https://doi.org/10.1016/j.ymeth.2010.01.026) · PMID: 20109550
4. Ferreira T, Gil da Costa RM, Dias F ve ark. (2024). Exploring the role of microRNAs as diagnostic and prognostic biomarkers in canine mammary tumors. *GeroScience*, 46(6), 6641-6657. [doi:10.1007/s11357-024-01260-7](https://doi.org/10.1007/s11357-024-01260-7) · PMID: 38954129
5. Nair MG, Mavatkar AD, Naidu CM ve ark. (2024). Elucidating the role of microRNA-18a in propelling a hybrid epithelial-mesenchymal phenotype and driving malignant progression in ER-negative breast cancer. *Cells*, 13(10), 821. [doi:10.3390/cells13100821](https://doi.org/10.3390/cells13100821) · PMID: 38786043
6. Koźniewski K, Wąsowski M, Jonas MI ve ark. (2022). Epigenetic regulation of estrogen receptor genes' expressions in adipose tissue in the course of obesity. *International Journal of Molecular Sciences*, 23(11), 5989. [doi:10.3390/ijms23115989](https://doi.org/10.3390/ijms23115989) · PMID: 35682668
7. Gao C, Cao X, Miao L ve ark. (2026). lncRNA FENDRR as a prognostic biomarker and regulator of bladder cancer progression via the miR-18a-5p/ESR1 axis. *Journal of Environmental Pathology, Toxicology and Oncology*, 45(1), 1-12. [doi:10.1615/JEnvironPatholToxicolOncol.2025056717](https://doi.org/10.1615/JEnvironPatholToxicolOncol.2025056717) · PMID: 41662675
8. Chauhan V, Kashyap P, Chera JS ve ark. (2024). Differential abundance of microRNAs in seminal plasma extracellular vesicles (EVs) in Sahiwal cattle bull related to male fertility. *Frontiers in Cell and Developmental Biology*, 12, 1473825. [doi:10.3389/fcell.2024.1473825](https://doi.org/10.3389/fcell.2024.1473825) · PMID: 39411484
