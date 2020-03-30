function verim(){
    var dekar=0, urun, result,result1,yenidekar=0;
    result = document.getElementById('result');
    result1 = document.getElementById('result1');
    dekar = document.getElementById("tarladekar").value;
    urun = document.getElementById("exampleFormControlSelect1").value;

if(urun == "Domates"){
    yenidekar = dekar*(7/20);
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br> <h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;"> DOMATES </h2> <br><br> ' +
    "<h4>İKLİM KOŞULU :</h4>  <br>" +
    "Domates, sıcak ve ılıman iklim sebzesidir. Gündüz 17–26˚C, gece ise 14–18˚C'dir. Sıcaklık -2°C'ye düşerse, bitki tamamen zarar görür. 10˚C'nin altında ve 30˚C'nin üzerinde tozlanma ve döllenmede problemler ortaya çıkmakta, meyve bağlayamamaktadır. Yüzde 70'lik hava nemi idealdir. En az 6 saat doğrudan güneş alan yerlerde yetiştiricilik yapılmalıdır. <br> <br>" +

    "<h4>GÜBRELEME </h4><br>" +
    "Toprak tahlili ile belirlenen gübre miktarları doğru zamanda verilmelidir. <br>" +

    "Amonyum nitrat (AN): – 8 kg/da – Yarısı toprak hazırlanırken verilir. Diğer yarısı ilk meyvelerle beraber, sulamadan önce verilir. Erken dönemde verilen fazla azot verimi düşürür. <br>" +

    "Diamonyumfosfat (DAP): – 10 kg/da – Tamamı toprak hazırlığı ile beraber verilir. <br>" +
    "Potasyum sülfat: - 10 kg/da – Tamamı toprak hazırlığı ile beraber verilir.<br> <br>" +

    "<h4>DİKİM MESAFESİ :</h4> <br>" +
    "Yer çeşitlerinde bitki aralığı, 40-60 cm karık aralığı 120-160 cm arasında olmalıdır. Sırık çeşitlerde ise sıra üzeri 30-40cm, sıra üzeri 60-70 cm olmalıdır. <br> <br>" +
    
    "<h4>SULAMA :</h4> <br>" +
    "Domateste sulama aralığı azami 3 gündür 3er gün aralıklarla su verilir fakat bu toprak yapısana göre killi kumlu olmasına göre değişir bitki için 1-2 defa 4-5 gün aralığı arasında su vermemek suretiyle yapılan işleme yandırma adı verilir bu bitkinin bir müddet boyunca susuz kalıp daha sonra su vererek daha iyi kök atmaya teşvik amacıyla yaptırılır. <br>" ;
    
}else if(urun=="Fasulye"){
    yenidekar=dekar*7/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">FASULYE</h2> <br> <br>' +
    "<h4>IKLIM KOŞULU : </h4><br>" +
    "Fasulye ılık iklim sebzesidir. Sıcaklık sıfırın altında 2-3 Cye düştüğünde büyük zarar görür. Sıcaklığın optimum 15.5-21 C olduğu yerlerde rahat bir gelişme göstermektedir. 15.5 C altındaki sıcaklıklarda gelişme gerilemektedir.Çiçeklenme devresinde ise sıcaklığın 18-20 C olması gerekmektedir. Serin hava çiçeklenme için uygun değildir. Fasulyenin meyve bağlama döneminde ise 18-25 C arasındaki sıcaklıklar iyi meyve tutumunu ve gelişmesini sağlar. <br> <br>" +
    
    "<h4>GÜBRELEME : </h4><br>" +
    "En uygun toprak olarak kabul edilen kumlu-tınlı topraklara birkaç senede bir dekara 2-3 ton olmak üzere yanmış çiftlik gübresi verilir. Dekara 2-5 kg saf azot (N), 4-6 kg fosfor (P2O5) ve 3-5 kg potasyum (K2O) verilmelidir. Çimlenmekte olan tohumlara herhangi bir ticari gübrenin zararının dokunmaması için gübrelerin tohumların ekildiği yerin en az 5cm kadar uzağında ve 7..5 cm derinlikte verilmesi uygundur. <br> <br>" +
    
    "<h4>EKİM MESAFESI : </h4><br>" +
    "Bodur çeşitlerde sıra araları 40-50 cm, sıra üzeri 15-20 cm.dir. Sırık çeşitlerde ise sıraarası 50-60 cm, sıra üzeri 20-30 cm bırakılarak çizgiye ekim yapılmaktadır. Ocak usulü ekimde ise tavalar üzerine açılan 2-3 cm. derinlikteki ocakların içine harç konup tohum atılır. <br> <br>" +
    
    "<h4>SULAMA : </h4><br>" +
    "Vegetasyon devresinde Taze fasulye bitkisinin su ihtiyacı en az 300-450 mm dir. Bitkiler generatif devrede tam çiçekte iken sulanmamalıdır. Sulama zamanları fidelerde üç yaprakçıklı asıl yaprağın görünmesi sırasında, çiçeklenmeden evvel, meyve tutumundan 10 gün sonra ve hasattan 1 ay önceki devrelerde olmak üzere sulama yapılmalıdır. Sık ve hafif sulama yapılmalıdır. Çünkü taze fasulye sık aralıklarla sulamayı sever, bol sudan hoşlanmaz. <br> <br>" ; 

}else if(urun=="Patlıcan"){
    yenidekar=dekar*7/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">PATLICAN</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU :</h4> <br> " +
    "Patlıcan sıcak iklim sebzesidir. Soğuklardan korkar yetiştirme devrelerinde sıcaklık –1,-2  C’ye düştüğünde hemen ölür. Ilık iklimlerde senelik kültür bitkisi olarak yetiştirildiğinden tohum ikliminden itibaren hasat devresi sonuna kadar ürün için normal olarak 15-35  C’lerde ortalama altı aylık bir süreye ihtiyaç gösterir. Bölgemizde yağmurlar yetersiz olduğundan bitkinin sulanması gerekmektedir. <br> <br>" +

    "<h4>GÜBRELEME : </h4><br>" +
    "Patlıcanlar gübreyi çok sever. Patlıcan yetiştirilecek toprağın dikimden önce dekara 4-6 ton hesabı ile iyi vasıflı, yanmış ahır gübresi ve yardımcı olarak dekara fosforlu ve azotlu gübrenin yarısı dikim esnasında, azotlu gübrenin ikinci yarısı ise ilk sulamadan önce verilmelidir. <br>" +
    "Azotlu gübre olarak: 21 kg/da N, <br>" +
    "Fosforlu gübre: 10 kg/da P2O5 saf olarak verilmelidir. <br> <br> " +

    "<h4>DİKİM MESAFESİ: </h4><br>" +
    "Tohum sıcak yastıklara Şubat ayının ilk haftasında ekilir. Serpme veya sıravari olarak metrekareye 5-6 gr üzerinden ekilir. Tohumlar çimlenip 7-8 yapraklı olduktan sonra tohumlar Nisan ayının 2. haftasından itibaren 50 cm sıra üzeri 100 cm sıra arası ile esas yerine fideler aynı günde dikilmeye dikkat edilerek dikilir. Dikimden hemen sonra can suyu verilir. <br> <br>" +
    
    "<h4>SULAMA : </h4><br>" +
    "Patlıcan yetiştiriciliğinde pratik bir kaide olarak ilk can suyundan sonra hava durumuna göre 15-20 gün müddetle su verilmez.yetişme devresinde 7-8 günde bir sulanması gerekir. Aksi taktirde gelişme yavaşlar mahsul azalır ve meyvelerde acılık başlar. <br> <br>" ;

}else if(urun=="Patates"){
    yenidekar=dekar*7/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">PATATES</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU : </h4><br>" +
    "Patates, ilkbaharda toprak ısısı 8-10 dereceyi bulduğu ve geç donların sona erdiği zaman dikilir. <br> <br>" +
    
    "<h4>GÜBRELEME : </h4><br>" +
    "Patates çiftlik gübresinden çok hoşlanır. Dekara 1.5-2 ton, eğer toprak çok fakir ise 2.5-3 ton çiftlik gübresi verilirse verim çok artar. Bu miktarlardan fazlası nişasta miktarı ve lezzeti olumsuz etkiler. Eğer toprak tahlili yapılmamışsa saf madde olarak dekara sulu şartlarda 14-16 kg azot, 8-10 kg fosfor, 8-10 kg potasyum verilebilir. <br> <br>" +

    "<h4>DİKİM MESAFESİ: </h4><br>" +
    "Dikimde sıra arası 70-75 cm, sıra üzeri 20 –40 cm dir. Dikim derinliği; yüzlek dikimde 2cm, derin dikimde 5 cm dir. Yüzlek dikimlerin üzerine en az 15 cm, derin dikilenlerin üzerine ise 10 cm toprak konularak sırt yapılmalıdır. <br> <br>" +

    "<h4>SULAMA : </h4><br>" +
    "Topraktaki nem dikkate alınarak ilk sulama, yumrular fındık büyüklüğüne geldiğinde yapılmalıdır. Hafif topraklarda 15-18, ağır topraklarda 22-25 gün arayla yetiştirme süresince 2-4 sulama yapılır. Hasat ile son sulama arasında 1 haftalık bir zaman bırakılır. <br>" ;

}else if(urun=="Soğan"){
    yenidekar=dekar*7/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">SOĞAN</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU : </h4><br>"+
    "Gün uzunluğu ve sıcaklık, soğan yetiştirmeyi sınırlayan iki önemli unsurdur. Bitkinin erken gelişme devresinde serin havaya ihtiyaç vardır. Fakat baş bağlama ve başın büyümesi için sıcaklığın fazla olması gerekir. Erken gelişme devresinde ortalama sıcaklık 13 ºC olmalıdır. Baş bağlamaya başladığı zaman sıcaklığı 21ºC ve başın olgunlaşması için de 24-27 ºC olması gerekir. Erken çeşitlerde gün uzunluğu 10-12 saat olunca baş bağlama başlar. Çeşitlerin 13-15 saat gün uzunluğuna ihtiyaçları vardır. Erkenci çeşitler soğuk bölgelerde iyi ürün vermez. <br> <br>" +

    "<h4>GÜBRELEME : </h4><br>" +
    "Soğan yetiştirilecek arazi humus ve organik maddece fakir ise ; dekara 3-4 ton arasında bir önceki sonbahara veya ilkbahar başlarında uygulanmalıdır. Ayrıca siltli, tınlı ve killi tınlı topraklarda önce ahır gübresi vermek şartıyla tamamlayıcı gübre olarak da dekara saf olarak 6-7 kg azot ile 6-7 kg fosfor verilmelidir. Ahır gübresi verilmediği durumlarda bu miktarlar azot ve fosfor için 9-10 kg olmalıdır. <br> <br>" +

    "<h4>DİKİM MESAFESİ: </h4><br>" +
    "Zeminden 10-15 cm yükseklikte 1.20 m genişlik ve 10-15 m uzunluğunda hazırlanan ve tahta denilen genişlik masuralar üzerinde 25-30 cm ara ile 3-4 cm derinlikte açılan çizilere sıra üzerinde 10 cm mesafe ile dikilir. <br> <br>" +

    "<h4>SULAMA : </h4><br>" +
    "Soğanlar yüzeysel köklü bir bitkidir. Köklerin çoğu toprağın 40-50 cm derinliğinde bulunur. Soğanlar devamlı rutubetli bir toprakta yetiştiriliyorsa, bu gibi durumlarda fazla sulama zararlı olur. <br>";
    
}else if(urun=="Nohut"){
    yenidekar=dekar*3/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">NOHUT</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU : </h4><br>" +
    "Nohut kurak bölgelerde yağmura bağlı olarak ekilir. Nohut bitkisi soğuklara hassas olmakla beraber 10 dereceye kadar dayanabilir. Sert kışlara dayanamaz. Bu nedenle yurdumuzda ilkbaharda ekiliyor. Nohut fazla nemi sevmeyen bir bitkidir. <br> <br>" +

    "<h4>GÜBRELEME : </h4><br>" + 
    "Nohut kökleri gübrelenirse nohut verimi çok daha iyi olur. Özellikle erken ekilirse 2-3 kg saf gübre uygulanırsa nohut tane tutma oranını artırır. Fosforlu gübre uygulaması da verimli artışa neden oluyor. Gübre ekim öncesi toprağa uygulanması gerekiyor. <br> <br>" +

    "<h4>DİKİM : </h4><br>" +
    "Nohut ekimi yapılırken dekara atılacak miktar, sıra aralığına ekim biçimine ve ekilecek nohut çeşidinin 1000 Tane ağırlığına ve tohumun çimlenme gücüne göre değişmektedir. Eğer serpme olarak ekilecek ise, dekara 15-25 kg tohumluk hesap edilmelidir. Bu miktar, çok iri taneli çeşitlerde biraz daha artabilir. <br> <br>" +

    "<h4>SULAMA : </h4><br>" +
    "Nohut yarı-kurak ve kurak bölgelere adapte olmuş, derin köklü bir bitki olduğundan, kurağa dayanıklıdır. Bu nedenle, her hangi bir sulama işlemi söz konusu değildir. <br>" ;
    
}else if(urun=="Karpuz"){
    yenidekar=dekar*1/7;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">KARPUZ</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU : </h4><br>" +
    "Karpuz, sıcak ve ılık iklim bitkisidir. Soğuklardan çok etkilendiği için yetişme devresinde don tehlikesi olmamalıdır. Tohum ekiminde toprak sıcaklığı 12C’nin üzerinde olmalıdır. Rutubetin yüksek olduğu yerlerde hastalıklardan etkilenir. <br> <br>" +

    "<h4>GÜBRELEME : </h4><br>" +
    "Sonbaharda derin sürümden sonra 3-4 ton/da ahır gübresi atılır. <br>" +
    "Kimyasal gübre olarak 15-18 kg/da N ve 10 kg/da P2O5 verilmelidir. Fosforlu gübrenin tamamı ve azotlu gübrenin 1/3’ü ekim veya dikimden önce atılarak kültüvatörle karıştırılmalıdır. Azotlu gübrenin 1/3’ü çiçeklenme devresinde 1/3’ü ise meyveler 5-65 cm çapında olduğunda verilmelidir. <br> <br>" +

    "<h4>DİKİM MESAFESİ :</h4> <br>" +
    "Arazide ekimden önce sıra arası 2 m olacak şekilde karık pulluğu ile karıklar çekilmelidir. Bu karıkların kenarına tek taraflı olarak ve sıra üzeri 75 cm olacak ocaklara ekim yapılır. Her ocağa 2-3 adet tohum bırakılmalıdır. Tohumların üzeri 5-6 cm toprakla örtülerek hafifçe bastırılmalıdır. Bölgemizde araziye ekim 20 Nisan-5 Mayıs tarihlerinde yapılmalıdır. Çıkıştan sonra ocakta fidelerden uygun olan iki adedi bırakılır. Daha sonra bir adet bitki bırakılır. <br> <br>" +

    "<h4>SULAMA : </h4><br>" +
    "Bitkiler uzun süre sulamaya ihtiyaç duymadan gelişme gösterirler. Fideler küçükken fazla sulama yapılırsa gelişmeye olumsuz etki yapar. Meyve oluşum dönemine kadar mümkün olduğu kadar az sulama yapmak gerekir. Meyve büyüklüğü 5-6 cm olduktan sonra normal sulamalar yapılmalıdır. Bu devreden itibaren 15 günde bir sulama yapılmalıdır. Sulamalarda 0-90 cm toprak derinliği tarla kapasitesine getirilmelidir. Sulamalara bitkiler verimden düşmeye başladığında son verilmelidir. <br> <br>" ;
    
}else if(urun=="Biber"){
    yenidekar=dekar*7/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">BİBER</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU : </h4><br>" +
    "Biber ılık ve sıcak mevsim meyvesidir. Soğuklardan çok etkilenir. Yetiştirme devrelerinde sıcaklık sıfırın altında 2-3 dereceye düştüğünde tamamen ölür. <br> <br>" +

    "<h4>GÜBRELEME : </h4><br>" +
    "Biber yetiştirilecek toprağa toprak hazırlığı sırasında 3 ton/da yanmış ahır gübresi verilir. Dikimle birlikte fosforlu gübrenin tamamı, azotlu gübrenin yarısı uygulanır. Azotlu gübrenin diğer yarısı ise ilk sulamadan önce verilmelidir. Azotlu gübre 15 kg/da N, fosforlu gübre olarak 10 kg/da P2O5 saf olarak verilmelidir. <br> <br>" +

    "<h4>DİKİM MESAFESİ : </h4><br>" +
    "Biberler genelde sıra arası 80 cm, sıra üzeri 30-50 cm olacak şekilde dikilir. <br> <br>" +

    "<h4>SULAMA : </h4><br>" +
    "Biber sulamasına dikimden 10-15 gün sonra başlanmalı, ilk meyve görülünceye kadar sulamalardan kaçınılmalıdır. İlk meyve görüldükten sonra birer haftalık aralıklarla sulamalara devam edilmeli ve Eylül ayı sonu Ekim ayı başında sulamalara son verilmelidir. <br>" +
    "Biber yetiştiriciliğinde sulamaya çok dikkat edilmelidir. Sulama anında suyu karık sırtlarına ve kök boğazına yükseltmemek gerekir. <br>" ;
    
}else if(urun=="Arpa"){
    yenidekar=dekar*3/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">ARPA</h2> <br>' +
    "<h4>İKLİM KOŞULU :</h4> <br>" +
    "Arpa, fazla soğuk ve fazla sıcak olmayan, nispi nemi yüksek olan yerlerde iyi gelişir. Sıcaklığı 0 ºC nin altına düşmeyen ve 18 - 20 ºC'nin üzerine çıkmayan, nispi nemi % 70 - 80 olan yerler arpa için çok uygundur. <br> <br>" +

    "<h4>GÜBRELEME : </h4><br>" +
    "Tavsiye edilen gübre dozları; taban gübre olarak 15 kg/da 20:20:0, üst gübre olarak 15 kg/da amonyum nitrat´dır. Hava şartlarına göre üst gübre ikiye bölünerek de verilebilir. <br> <br>" +

    "<h4>DİKİM MESAFESİ :</h4> <br>" +
    "18-20 kg/da tohum (m2‘ye 400 tane) yeterlidir. Ekim mibzerle yapılıyorsa bu miktar 2-3 kg kadar azaltılır. <br> <br>" +

    "<h4>SULAMA : </h4><br>" + 
    "Genelde, normal şartlarda sulama gerekmez. Ancak gelişme devresinde yağışların yeterli olmadığı dönemlerde arpanın ihtiyacı olan suyun, sulama suyu ile karşılanması gerekir. <br>"+
    "Arpada sulama yapılacaksa birinci su, sapa kalkma; ikinci su, süt olumu devresinde olacak şekilde iki su verilir. Tek su verilecek ise sulama süt olum devresinde yapılmalıdır. <br>" ;
    
}else if(urun=="Kavun"){
    yenidekar=dekar*1/7;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">KAVUN</h2> <br> <br>' +
    "<h4>İKLİM KOŞULU : </h4><br>" + 
    "Kavun, sıcak ve ılık bir iklim bitkisidir. Uzun yetişme süresi boyunca güneşli, sıcak ve kuru bir hava ile yeterli toprak nemi ister. Nemli bölgelerde mantari hastalıklara yakalanma ihtimali yüksektir. Yetişme devresi içerisinde don tehlikesi olmamalıdır. <br> <br>" +

    "<h4>GÜBRELEME :</h4> <br>" +
    "Kavun organik maddesi zengin toprakları sevdiğinden, tarlaya ahır gübresi veya yeşil gübre verilmesi uygun olur. Sonbaharda pulluk veya diskaro altına, toprak ağır ise dekara 4-6 ton, toprak kumlu ise dekara 6-8 ton ahır gübresi verilerek karıştırılmalıdır. <br> <br>" +

    "<h4>DİKİM MESAFESİ :</h4> <br>" +
    "Genelde İlkbahar, yaz ayları içindeki aylar tavsiye edilir.Kavun tohumunda tohumun kalitesi ve ekimi; hasadın verimliliği açısından önemlidir.Kavun tohumu ekim derinliği 2-2,5 cm, sıralar üzeri  mesafe 50-60  cm ,sıralar arası  150-200  cm arasındadır.Kavun fidesi kullanılacaksa kavun fidesi ekim aralıkları, kavun tohum ekim aralıkları ile aynı olabilir. <br> <br>" +

    "<h4>SULAMA :</h4> <br>" +
    "Kavunu sulamak çok önemlidir.Kavunu kesinlikle ara ara sulanmalıdır.Kavun'unuzu ilk sulama sonrasında yapacağınız sulamalar çok önemlidir. <br> " +
    "Sulamalarda 0-90 cm toprak derinliği tarla kapasitesine getirilmelidir. Meyve olgunlaşma döneminde sulamalara dikkat edilmelidir. Bitkiler ve meyveler sulama suyuna mümkün olduğu kadar temas ettirilmemelidir. <br> " ;
    
}else if(urun=="Buğday"){
    yenidekar=dekar*3/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">BUĞDAY </h2><br> <br>' +
    "<h4>İKLİM KOŞULU :</h4> <br>" +
    "Buğday geniş bir adaptasyon yeteneğine sahip olmasına rağmen fazla sıcak ve nemden hoşlanmayan bir serin iklim tahılıdır. Özellikle gelişiminin ilk dönemlerinde (çimlenme -kardeşlenme) sıcaklığın 8-10 °C, bağıl nemin % 60'ın üzerinde olması yeterlidir. <br> <br>" +

    "<h4>GÜBRELEME :</h4> <br>" +
    "Kuru koşullarda 6-8 kg/da N, 9 kg/da P2O5, sulu koşullarda ise 16 kg/da N, 13 kg/da P2O5 karşılığı azotlu ve fosforlu gübre verilmesi önerilmiştir. Azotlu gübrenin ilk yarısı ve fosforlu gübrenin tamamı ekimde, azotun ikinci yarısı ise kardeşlenme başlangıcında uygulanmalıdır. Azotlu gübre toprak yüzeyine, fosforlu gübre mibzerle banda verilmelidir. <br> <br>" +

    "<h4>DİKİM MESAFESİ :</h4> <br>" +
    "Normal şartlarda makine ile ekimde,dekara 16-18 kg tohum yeterli iken, serpme ekim ile ortalama 25 - 30 kgbuğday tohumu atıl- maktadır. Sonuçta, yaklaşık olarak dekara, ortalama 12 kg tohum israfı vardır. <br> <br>" +

    "<h4>SULAMA :</h4> <br>" +
    "Buğday öncelikle başaklanma başlangıcı ve süt olumunda olmak üzere iki kez sulanmalıdır. Suyun bol olduğu ve kurak geçen mevsimlerde ise sapa kalkma, başaklanma ve süt olumunda olmak üzere 3 defa sulanmalıdır. Eğer buğday ekim mevsiminde çıkış için toprakta yeterli nem yoksa ve mevsim itibariyle kurak geçiyorsa ekimde de sulama yapılmalıdır. Sulamalar toprağın 90 cm derinliği doyuracak şekilde yapılmalıdır.<br> " ;
    
}else{//çilek
    yenidekar=dekar*7/20;
    result1.innerHTML = "<br>" + dekar + " dekarlık alana " + yenidekar + " metreküp su kullanmanız gerekmektedir. ";
    result.innerHTML = '<br><br><h2 style="background-color:rgb(228, 0, 0);text-align:center;border-radius: 15px;">ÇİLEK </h2><br> <br> ' +
    "<h4>İKLİM KOŞULU :</h4> <br>" +
    "Çilek -10 °C’ye kadar özel bir önlem almadan yetiştirilebilir. Daha soğuk bölgelerde bitkilerin saman, kuru yaprak vs gibi materyalle örtülerek dondan korunması gerekmektedir. İlkbaharın geç donları, Akdeniz Bölgesi ve benzeri yerlerde zararlı olabilmektedir. Çilekte çiçeklenme uzun bir döneme dağıldığı için, don ürünün tümüne zarar veremez. Bu nedenle çilek, yetiştiricilik riski en az olan meyve türlerinden biridir. <br> <br> " +

    "<h4>GÜBRELEME :</h4> <br>" +
    "Çilek dikilecek toprak kumsal ise 4-6 ton, normal topraklarda 3-4 ton yanmış çiftlik gübresi, toprak tahlilinden sonra ve dikimden önce 30-35 kg/da azot, fosfor ve potas içeren kompoze gübre verilmelidir. Gübrelemeden sonra, toprak işlenerek gübrenin toprağa karışması sağlanmalıdır. Toprak işlendikten sonra gerekiyorsa toprak fümigasyonu yapılmalıdır. Toprak iyice işlendikten sonra dikim yastıkları hazırlanmalıdır. <br> <br>" +

    "<h4>DİKİM MESAFESİ : </h4><br>" +
    "Sıra üzerinde 30 cm aralıklarla dikim yapilabilir sıraların arası ise 45 cm aralıklı olması gerekmektedir. <br> <br>" +

    "<h4>SULAMA :</h4> <br>" +
    "Sulama suyu miktarı ile sulama zamanı çok önemlidir. Çünkü çilek kökleri suya karşı aşırı duyarlıdır. Aşırı sulama sonucunda kloroz (sarılık) ve mantarsal hastalıklar ortaya çıkar. Frigo (soğuklandırılmış) fidelerle yapılan gerek yaz gerek ilkbahar dikiminde dikim sırasında ve tomurcuklar oluşuncaya kadar yağmurlama sulama, çiçek ve meyve döneminde ise gerek toprak altından ve gerek toprak üstünden damla sulama yapılması önerilir. <br>" ;
}
}