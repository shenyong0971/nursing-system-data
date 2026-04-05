const DRUG_DB = (() => {
  const raw = `
Abilify(Aripiprazole) 5mg/tab 0.5# HS	思覺失調症	暈眩、焦躁
Apa-Bily 10mg/tab 1# HS	思覺失調症	感冒症狀、乏力
Aricept 5mg/tab 1# HS	阿茲海默症	痙攣、倦怠
Actein 66.7mg/g 200mg/3g/Sachet 1pack TID	化痰	嗜睡、發燒
Actein發泡錠(Fluimucil) 600mg/tab 1# BID	化痰	嗜睡、發燒
Acetylcysteine 600mg/tab(發泡錠) 1# QD	化痰	嗜睡、發燒
Acetyl 200mg/3g 1pack BID	化痰	嗜睡、發燒
Amanda F.C 100mg/tab 1# HS	帕金森氏症	末梢水腫、亢奮、焦慮
Amantadine sulfate 100mg/tab 0.5# TID	帕金森氏症	精神病、尿滯留
Akineton 2mg/tab 1# QD	帕金森氏症	暈眩、嗜睡
Acetaminophen 500mg/tab 1# BID 	退燒、止痛	皮疹、肝毒性
AcetaL 500mg/tab 1# QID	退燒、止痛	皮疹、肝毒性
Apixaban 2.5mg/tab 1# BID	抗凝血劑	異常出血
Aspirin 100mg/tab 1# QD	抗凝血劑	出血、皮疹
Acerine 10mg/tab 1# QD	末梢循環障礙	暈眩、失眠
Aldactin 25mg/tab 0.5# QD	利尿、解便秘	嗜睡、頭暈
Aldactone 25mg/tab 1# BID	利尿	腹瀉、噁心
Actos 30mg/tab 1# QD	糖尿病	上呼吸道炎症
Actosmet 15mg/tab/850mg/tab 1# QD	降血糖	肌痛、鼻塞
Amaryl 2mg/tab 1# QD	降血糖	疲倦、暈眩
Amaryl M 2/500mg/tab 1# QD	降血糖	肝臟酵素增加
		腸胃症狀
Amlodipine 5mg/tab 1# QD	降血壓	頭痛、暈眩
Augmentin 1g/tab 1# Q12H	抗生素	腹瀉、噁心
		
Alprazolam(Alprazo) 0.5mg/tab 1# QN	抗焦慮	思睡、易有戒斷症狀
Asverin 20mg/tab 1# TID	鎮咳、祛痰	搔癢、睡意
Aminophylline 100mg/tab 1# BID	解支氣管痙攣	皮疹、噁心
Atorvastatin(Atorva) 20mg/tab 1# QN	降血脂	肌肉痙攣、排尿困難
Amiodarone(Adarone) 200mg/tab 0.5# QD	心律不整	低血壓、緩脈
Acarbose 50mg/tab 1# TIDAC	糖尿病	脹氣、腹瀉
All right Calcium suspsion 180ml/bot 10mL QD 	鈣及維生素A、D	頭痛、便秘
Amiloride,Dichlotride  (Amizide) 5/50mg/tab 0.5# QD	利尿劑	口渴、頭暈
Alinamin-F 50 S.C. 1# BID	補充維生素B	尿液變黃
Ateno F.C.(Atenolol) 50mg/tab 1# QD	狹心症、降壓	支氣管痙攣、徐脈、頭暈
Allegra(Fexofenadine) 60mg/tab 1# QD	過敏性鼻炎	頭痛、消化不良、作嘔、疲勞
Atipam(Lorazepam) 1g/tab 1# HS	鎮靜	思睡、眩暈、虛弱及情緒不穩
Allopurinol(urINOL) 100mg/tab 1# QD	高尿酸血症	皮疹、搔癢
Atozet(Ezetimibe+Atorvastatin)10/20mg/tab 1# QD	降血脂	肌肉痛、頭痛
		肝功能異常
Ativan(Lorazepam) 0.5mg/tab 1# HS	緩解焦慮	思睡、暈眩、虛弱、情緒不穩
	酒精戒斷症候群	
Aesculus  Hippocastanum	改善循環	暈眩、頭痛
Extract 20mg/tab 1# BID		
Algitab(aAlginic acid) tab 2# QID	胃藥	腹瀉、便秘
Alvolon 500mg/tab 1# BID	緩解靜脈曲張、痔瘡	噁心、嘔吐
Alverine 60mg/cap 1# TID	解痙劑	噁心、頭痛
	對子宮、腸胃平滑肌具專一性作用	過敏、暈眩
Artane 2mg/tab 1# BID	錐體外症狀	口乾、暈眩
	帕金森氏症	視力模糊
Adalat OROS (Nifedipine) 30mg/tab 1# QD	狹心症、降壓	暈眩、水腫
AlfacalcidoL soft 0.5mcg/cap 1# QD	促鈣吸收劑	食慾不振、搔癢、腸胃不適
	副甲狀腺低下	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Baclon 10mg/tab 1# BID	肌肉鬆弛劑	嗜睡、便秘
Bafan 5mg/tab 1# BID	肌肉鬆弛劑	呼吸困難、無力
Baclofen(Solofen) 5mg/tab 1# BID	肌肉鬆弛劑	鎮靜、肌無力
Bisoprolol 1.25mg/tab 1# QD	狹心症、降壓	出汗、緩脈
Behyd 4mg/tab 1# QD	利尿、降壓	腸胃症狀、眩暈
Biso F.C. 5mg/tab 0.5# BID	治療血管疾病	徐脈、呼吸困難
Bokey(Aspirin) 100mg/tab 1# QD	抗凝血劑	出血、皮疹
Benzonatate Soft Capsules 100mg/tab 1# QID 	鎮咳	鎮靜、鼻塞
BenzhexoL(B.H.L) 2mg/tab 1# QD	帕金森、顫抖	畏光、嗜睡
B.M.sol 120mL 5mL TID	鎮咳、祛痰	呼吸抑制、心悸
		禁肝功能障礙
Bislan 12mg/tab 1# QID	袪痰	暈眩、思睡
Bisolvon 50mL/bot 5mL BID 	化痰	咳嗽加劇
Beesix 50mg/tab 2# QD 	維他命B6補充	少有
B-COM 1# QD	維生素B補充	少有
Biotase 1# TID (妙化錠-消化酵素)	幫助消化	少有
Bromazepam 3mg/tab 0.5# BID	焦慮	思睡、噁心
Bisacodyl E.S.C.T. 5mg/tab 1# QD	解便秘	腸胃不適
Bactrim 400mg+80mg/tab 2# BID	抗生素	過敏、噁心
Bethanechol 25mg/tab 1# BID	治療尿滯留	頭痛、潮紅
Biperin 2mg/tab 1# QD	帕金森氏症	口乾、嗜睡
Bisco 8mg/tab 1# BID	支氣管炎	咳嗽加劇
Broen-C 2000U/20mg/tab 1# TID	消腫、化痰	心悸、腹瀉
Betahistine(Nilasen) 16mg/tab 1# TID	梅尼爾氏症	腸胃不適
Betahistine(Harkin) 24mg/tab 1# BID	抗暈眩	腸胃不適
Bacide 80/400mg/tab 1# QD	抗生素	腹瀉、噁心
Biktarvy 50/200/25mgtab 1# QD	愛滋病毒藥	腹瀉、噁心
BLOODFULL S.C.(Ferrous Fumarate+ Folic Acid+vitB12+vitB1+vitB2+ Nicotinamide) 1# QD	缺鐵性貧血	便祕
	低血色素貧血	
Busix(Bumetanide) 1mg/tab 1# PRN	利尿、消水腫	尿酸升高
Buisline(Buspirone HCL) 10mg/tab 0.5# BID	減緩焦慮、恐慌	頭暈
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Cefaclor(U-CLOR) 250mg/cap 1# TID 	抗生素	腹瀉、噁心
Cefixime 100mg/cap 2# BID	抗生素	過敏
		腸胃症狀
Cefspan 100mg/cap 2# BID	抗生素	過敏、噁心
Cephalexin(Keflex) 500mg/cap 1# QID	抗生素	腸胃症狀、過敏
CefadroxiL 500mg/cap 1# Q12H	抗生素	腸胃症狀、過敏
Cexime 100mg/cap 1# BID	抗生素	過敏、腸胃症狀
Ciprofloxacin 250mg/cap 1# QD	抗生素	過敏、腹瀉
CURAM(口溶錠)（Amoxicillin 875mg+Clav 125mg） 1000mg/tab 1# Q12H	廣效抗生素	皮疹、淋巴腺熱
Cataflam 25mg/tab 1# QID	止痛	過敏
Celebrex 200mg/tab 1# QN	止痛	頭昏、皮疹
Codeine phosphate 30mg/tab 1# Q6H	鎮咳、鎮痛	暈眩、嗜睡
		噁心、嘔吐
Capoten(Captopril) 25mg/tab 1# TID	降血壓	頭暈、乾咳
ConieL F.C. 4mg/tab 0.5# QD	降血壓	潮紅、便祕
Co-Diovan 80+12.5mg/tab 1# QD	降血壓	頭昏、疲倦
Concor(Bisoprolol) 1.25mg/tab 1# QD	降壓、狹心症	出汗、緩脈
Caduet 5/10mg/tab 1# QD	降壓、狹心症、降血脂	肌痛、頭痛
Coxine 20mg/tab 0.5# BID	狹心症	頭暈目眩
Cerstor 10mg/tab 1# QD	降血脂	肌痛、便秘
Cordarone 200mg/tab 0.5# QD	抗心律不整	低血壓、掉髮
Clopidogrel 75mg/tab 1# QD	抗凝血劑	出血、紫斑
Clogrel F.C. 75mg/tab 1# QD	降低粥狀動脈硬化栓塞	異常出血
Clonopam 0.5mg/tab 1# HS	鎮靜、安眠	頭暈、遲緩
Clonazepam 0.5mg/tab 1# HS	抗焦慮、助眠	暈眩、運動失調
	抗癲癇	反應遲緩
Cardolol 40mg/tab 0.5# TID	緩解緊張	徐脈
Calcium Acetate(Calowlin) 667mg/tab 1# TID	補充鈣離子	噁心、高血鈣
Calcium Carbonate 500mg/tab 1# QID	抑制胃酸	腹脹、打嗝
Cortisone 25mg/tab 1# BID	類固醇(發炎、過敏)	消化不良、焦躁、失眠
Colchicine 0.5mg/tab 1# BID	痛風(秋水仙素)	噁心、腹瀉
Conslife S.C 20/10/2mg/tab 2# HS	軟便劑	尿液呈粉色、糞便呈黑色
Canaglu 100mg/tab 1# QD	降血糖、糖尿病腎病變	便祕、膀胱炎
		酮中毒、口渴
Cetirizine Dihydrochloride 10mg/tab 1# HS	抗組織胺(鼻炎)	口乾、頭痛、嗜睡
Tidact/Cleocin(Clindamycin) 150mg/cap 1# Q6H	抗生素	過敏、下痢
Comtan(Entacapone) 200mg/tab 1# TID	帕金森氏症	腸胃症狀、尿液深色、疲倦
Ceregent granules(Piracetam) 1200mg/pk 1pack BID	腦血管障礙/老化引起的智力障礙、皮質性抽蓄	運動機能亢進、增重、神經質、嗜睡、抑鬱、無力感
(具抗凝血效果，腦出血禁用、經腎臟排泄故腎病未透析患者禁用)		
Cyproheptadine(CYTADINE) 4mg/tab 1# BID	緩解過敏	鎮靜、食慾/體重增加
Ciflodal(Ciprofloxacin) 500mg/tab 1# BIDAC	抗生素	過敏、暈眩、失眠、腸胃症狀
Cozaar  50mg/tab 1# QD	降血壓	無力疲倦、頭暈
Carbimazole(NTS) 0.5mg/tab 1# QD	甲狀腺機能亢進症	噁心、頭痛、紅疹
Crestor 10mg/tab 1# QD	高脂血症	頭痛、頭暈
Const-K ER(Potassium Chloride) 750mg(K:10mEq)/tab 1# BID	補充鉀離子	噁心、脹氣
		腹痛、高血鉀
Cobamamide 0.5mg/cap 1# BID	惡性貧血	噁心、嘔吐
	B12缺乏症	
Captopril(Cabudan)　25mg/tab 1# QD	ACEls降血壓	乾咳、頭暈
	治療心衰竭	皮膚癢、紅疹
Cospirit(Amisulpride) 400mg/tab 2# HS	思覺失調症	昏睡、錐體外症狀、低血壓
Conmy(Terazonsin) 2mg/tab 1# HS	高血壓、良性攝護腺肥大	無力、姿態性低血壓、頭昏、嗜睡、鼻炎、心悸
Covina(Estradiol/Norethisterone) 2mg+1mg/tab 1# QD	雌激素補充	不規則出血
Cephadol 25mg/tab 1# TID	暈眩用藥	散瞳、胸灼熱
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Destine 540mg/tab 1# BID	腎結石	嘔吐、腹痛
Dioctyl sodium sulfaosussinate 20mg/tab 2# HS	腹脹	腹痛、噁心
	食慾不振	
Diazepam(Vanconin) 2mg/tab 1# HS	焦慮、解痙	嗜睡
Dilatrend 6.25mg/tab 1# QD	心臟衰竭	眩暈、低血壓
		徐脈
Dilatrend(Carvedilol) 25mg/tab 1# BID	鬱血性心衰竭、降血壓	眩暈、低血壓
		徐脈
Domperidone(Domtoo) 10mg/tab 1# BID	促進腸蠕動	口渴、女乳症
Dolcolax 5mg/tab 2# HS	治便祕	腹痛
Deparkine水劑 200mg/mL；40mL/btl 2mL BID	治癲癇	不正常出血
		手抖、倦怠
Deparkine 200mg/tab 1# BID	癲癇	不正常出血
		手抖、倦怠
Dormicum 7.5mg/tab 1# HS	鎮靜	麻木、酒醉感
Desloratadine(Denosin) 5mg/tab 1# QD	抗過敏	頭昏、睡意
Dimethicone 40mg/tab 1# QID	消脹氣	軟便、腹痛
Dilantin 100mg/tab 1# TID	癲癇	震顫、混亂
Dampurine 25mg/tab 1# TIDAC	促進排尿	頻尿、噁心
Duodart 0.5mg+0.4mg/cap 1# HS	攝護腺肥大	頭暈、勃起障礙
DailyCare actibest S.C. 50/5/5/10mg/tab 1# QD	維生素B補充	尿液變黃
Dasatinib 50mg/tab 1# QD	抗癌藥物	水腫、腸胃症狀、異常出血
Diphenidol 25mg/tab 1# BID	治療暈眩	口渴、胸灼熱
Dipyridamole 75mg/tab 1# QD	改善循環	暈眩、頭痛
Donepezil HCL(Aricept) 5mg/tab 1# HS	阿茲海默症	噁心、失眠
Donepezil(Demenzil) 10mg/tab 1# HS	阿茲海默症	噁心、失眠
Detrusitol 2mg/tab 1# BID	尿失禁、膀胱過動症	口乾、頭痛
Diltiazem HCl 30mg/tab 1# BIDAC	狹心症、降壓	水腫、頭痛
Diovan F.C.(Valsartan) 80mg/tab 1# QD	降血壓	肌痛、水腫
		
Doxaben 2mg/tab 1# HS	攝護腺肥大、降壓	頭暈、頭痛
		虛弱、水腫
Doxazosin 2mg/tab 1# HS	攝護腺肥大、降壓	頭暈、頭痛
Digoxin 0.25mg/tab 1# QD	心律不整、降心律	低血鉀、噁心、下痢
diaMIN MR(Gliclazide) 30mg/tab 1# BID	降血糖	頭暈、頭痛
Dopadine F.C.( Amantadine) 100mg/Tab 1# BID	帕金森病	精神病、充血性心衰竭、站立性低血壓
Dulcolax 5mg/tab 2# HS	緩解便祕	腹瀉
Dialicon(Diastase/Lipase/Pancreatin) 60/10/30mg 1# TID 	複方消化劑	腸胃症狀
Diamicron 30mg/tab 1# QD	安靜、鎮靜	低血糖、噁心
Doxycycline(Doxymycin) 100mg/cap 1# Q12H	抗生素	腸胃症狀、陰道炎、舌炎、腸胃炎
Diclocil(Dicloxacillin) 250mg/cap 1# Q6H	抗生素	腸胃症狀、過敏
Dapagliflozin F.C.(Forxiga) 10mg/tab 1# QD	治療糖尿病、心衰竭、慢性腎病	感染、鼻咽炎
Dapagliflozin(Qtern) 5mg/10mg/tab 1# QD	治療糖尿病、心衰竭、慢性腎病	感染、鼻咽炎
Duloxetine(dUXetine) 30mg/cap 1# BID	緩解焦慮	噁心、頭暈
Dogmatyl(Sulpiride) 50mg/tab 1# TID	消化性潰瘍	嘔吐、便秘、震顫
	嗜鉻細胞瘤	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Ebixa F.C 10mg/tab 1# BID	失智症	幻覺、困惑
Exforge 5mg+80mg/tab 1# BID	降血壓	暈眩、咳嗽
		周邊水腫
Exforge HCT 5mg+160mg+12.5mg/tab 1# QD	降血壓	眩暈、水腫
Eliquis 5mg/tab 0.5# BID	抗凝血劑	異常出血
Eliquis 2.5mg/tab 1# BID	預防心房纖維顫動造成之栓塞	異常出血
Eltroxin 50mcg/tab 3# QDAC	甲狀腺素	心悸，神經質
Epine(Quetiapine) 25mg/tab 2# HS	思覺失調症	嗜睡、頭暈
Edoxaban(Lixiana) 30mg/tab 1# QD	抗凝血劑	貧血、頭痛
Eurodin(Estazolam) 2mg/tab 1# HS	助眠	宿醉感、夢遊、笨拙
Espin(Aspirin) 100mg/tab 1# QD	抗血栓	出血、腸胃症狀
Efient 3.75mg/tab 1# QD	抑制血小板凝集	異常出血
Escitalopram 10mg/tab 1# QD	憂鬱症用藥	頭痛、噁心
Esomeprazole 40mg/tab 1# QDAC	消化性潰瘍	頭痛、便秘
Entecavir 0.5mg/tab 1# QN (貝樂克)	B肝病毒藥劑	疲倦、消化差
Entresto F.C. 100mg/tab 0.5# BID	慢性心衰竭	低血壓、高血鉀
Etoricoxib(Etor F.C.) 60mg/tab 1# QOD	非類固醇消炎劑、青光眼	虛弱、噁心、ALT/AST升高
Ezetrol(Ezetimibe) 10mg/tab 0.5# QD	降血脂	肌痛、腹瀉
Empagliflozin 10mg/tab 1# QD	糖尿病	低血壓、腎損傷
Erispan-S(Fludiazepam)0.25mg/tab 1# QD	失眠	食慾不振、隨意肌不可控感
	肌肉鬆弛劑	
Evista(Raloxifene) 60mg/tab 1# QD	停經後婦女骨質疏鬆症	潮紅、升壓
		腿部痙攣、腸胃症狀
		
		
		
Famotidine(Ulstop) 20mg/tab 1# BID	消化性潰瘍	頭痛、便秘
Folic Acid 5mg/tab 1# QD	葉酸補充	紅斑、噁心
Fluimucil 200mg/3g/pk 1pack TID	祛痰	噁心、嘔吐
Fucou capsules 1# TID	鎮咳	意識混淆
Fluzepam 2mg/tab 2# HS	失眠	便祕、口乾
Flupine 0.25mg/tab 1# TID	緩解焦慮	嗜睡、便秘
Furosemide (Lasix) 40mg/tab 1# PRN	利尿劑	疲倦、肌痙攣
Ferric hydroxide polymaltose 100mg/tab/T 1# QD	鐵劑咀嚼錠	腸胃不適、過敏
Ferrous Gluco-B 300/10/30mg/tab 1# TID	鐵劑補充	腸胃障礙
		糞便變色
Feburic 80mg/tab 0.5# QD	降尿酸	過敏、肝功能異常
Febuxostat 80mg/tab 1# QD	慢性痛風	肝功能異常
Flunarizine 5mg/tab 1# HS	末梢循環障礙、暈眩	嗜睡、食慾增加
Fluzine 5mg/tab 1# HS	眩暈、循環障礙	嗜睡、錐體外路症候群
Forflow S.R. 400mg/tab 1# QD	末梢血循障礙	頭暈、頭痛
Fylin 400mg/tab 1# QD (Pentoxifylline)	促末梢血循	噁心、暈眩
Fentanyl貼片25ug/h/piec 外用3日一片	止痛	暈眩、嘔吐
Finta(Finasteride) 5mg/tab 1# QD	良性前列腺增生	性慾減低、精液減少
Foster MDI 120dose/BID 2puff	治療氣喘	咽炎、口腔念珠感染
Fluimucil 600mg/tab 1# BID	祛痰	噁心、嘔吐
Ferich Forte(Iron+Folic Acid+Cyancobalamine) 150+1+0.025mg/cap 1# QD	鐵劑、葉酸、維生素B12補充	便祕、噁心、糞便變黑、四肢泛紅等
Fallep(Flunitrazepam) 2mg/tab 2# HS	失眠	口乾、便秘
		頭暈、嗜睡
Flut F.C.(Flupentixol) 0.5mg/tab 1# HS	精神病狀態	不安、遲緩
		淡漠、手抖
		吞嚥困難
Fluconazole 50mg/cap 1# QD	抗黴菌劑	腸胃症狀、發疹
Fluxel F.C. (Flupentixol 2HCl/Melitracen HCl) 0.5+10mg/tab 1# HS	抗焦慮、憂鬱	肌肉痙攣、肌肉不可控感、手抖 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Gasmin 40mg/tab 2# TID	緩解脹氣	軟便、下痢
Gascon 40mg/tab 1# BID	解脹氣	軟便、嘔吐
Gaslan 40mg/tab 1# QID	消脹氣	少有
Galvus MET 50/500mg/tab 1# BID	糖尿病	低血糖
GlucoMET 5/500mg/tab 1# BID	糖尿病	乳酸中毒
Glucophage(Metformin) 500mg/tab 1# BID	降血糖	脹氣、頭痛
		腹痛、噁心
Glucobay 50mg/tab 1# TID	降血糖	腹部症狀
Glimepiride 2mg/tab 0.5# QD	降血糖	乳酸中毒、暫時性聽損
Grumed-M F.C. 2mg/tab/500mg/tab 1# QD	降血糖	低血糖
Glycyrrhiza extract 120mL/Bot 10mL PRN(Brown mixture)	止咳	便祕、嗜睡、水腫、心律不整
Gina’ex(Ginkgocentrate F.C.)40mg/tab 1# BID	末稍血行障礙	頭痛、過敏
		
Gabapentin 100mg/cap 1# TID	抗癲癇、抑制神經痛	疲倦、頭痛
		噁心、嗜睡
Glyxambi 25mg+5mg/tab 1# QD	降血糖	鼻咽炎、血脂異常
Glipizide(Minidiab) 5mg/tab 1# QDAC	糖尿病	低血糖、蕁麻疹、光敏感
		
		
		
		
		
		
		
		
		
		
		
		
		
Hamg/tabo gran. 1200mg/tab 1pack BID	治療腦血管障礙及老化所引起的智力障礙	運動機能亢進、體重增加、神經質、抑鬱、無力
Herbesser(Diltiazem HC1) 30mg/tab 1# BID	降血壓	水腫、頭痛
	抗心絞痛	
Harnalidge 0.2mg/cap 1# HS	前列腺肥大	頭暈、低血壓
Medicon-A 20/90/20mg/tab 1# QID	鎮咳、祛痰	發疹、暈眩
Medicon 15mg/tab 1# TID	鎮咳、祛痰	發疹、暈眩
Halcion 0.25mg/tab 1.5# HS	失眠	鎮靜、運動失調
Henformin 500mg/tab 1# BID	降血糖	低血糖
Haloperidol 5mg/tab 1# HS	躁症、舞蹈症	心律不整
HYzaar 100/12.5mg/tab 1# QD	降血壓	咳嗽、疲倦
Hytrin 2mg/tab 1# QD	降血壓、良性攝護腺肥大	姿位性低壓
		頭痛、嗜睡
Hydralazine 25mg/tab 1# BID 	降血壓	心悸、頭痛
Hydroxychloroquine 200mg/tab 1# QD	抗瘧原蟲劑、免疫抑制劑	視力模糊、頭痛、皮膚癢、腸胃不適
Hodrin(Dihydroergotoxine) 1.5mg/tab 1# BID	腦循環改善劑	鼻塞、噁心、徐脈、低血壓、視力模糊
Harnalidge(Tamsulosin) 0.4mg/tab 1# QDAC	攝護腺肥大	頭暈、頭痛、射精障礙、姿勢性低血壓、胃部不適
Hychlozide(Hydrochlothiazide) 25mg/tab 1# QD	降壓、利尿	頭暈、腹瀉
		陽光敏感
		
		
		
		
		
		
		
		
		
		
		
		
Imovane 7.5mg/tab 1# HS	失眠	思睡、嘴苦
Ilosone 250mg/tab 1# BID	抗生素	肝功能障礙
Isoniazid 100mg/tab 2# QD	結核症	排尿困難、周邊神經炎
Isormol(Isosorbide-5-mononitrate) 20mg/tab 1# BID	狹心症	潮紅、徐脈
		低血壓
IndapamideSR 1.5mg/tab 1# QD	降血壓、利尿	頭痛、眩暈
Imipramine HC1 10mg/tab HS	抗憂鬱、夜尿、減緩慢性疼痛	疲倦、便秘、口乾
Imipramine 25mg/tab 1# HS	憂鬱、夜尿	疲倦、增重
Inspra F.C.( Eplerenone) 50mg 1# QD	慢性/心肌梗塞後心衰竭、降壓	高血鉀、暈厥、暈眩
Iron(Hote) 150mg/cap 1# QD	鐵劑補充	便祕、糞便變黑
Livalo 2mg/tab 1# QN	降血脂	肌痛、腹瀉
Irbesartan 300mg/tab 1# QD	降血壓	無力、疲倦
Irbesartan(Irbetan) 150mg/tab 1# HS	治療併有第二型糖尿病的高血壓	噁心、疲倦
		
		
		
		
		
		
		
		
		
		
		
		
		
Janumet 50/500mg/tab 0.5# BID	糖尿病	脹氣、口中金屬味
Januvia 100mg/tab 1# QD	糖尿病	腹痛、噁心
Jardiance 10mg/tab 1# QD	糖尿病	急性腎損傷
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Kinax Tablet 0.5mg/tab 1# HS	抗焦慮	眩暈
Keppra水劑 100mg/mL；300mL/btl 5mL BID	癲癇	頭暈、喉嚨痛
Keppra 500mg/tab 1# BID	癲癇	頭暈、喉嚨痛
Kascoal 50mg/tab 1# TID	消脹氣	軟便、嘔吐
K-Citrate 3.3g/pack 1pack QD	結石清除劑	電解質不平衡
Kentamin(B1/B6/B12)50mg/tab /50mg/tab/500mcg 1# QD	維生素	腸胃不適、過敏
Keppra Solution 100mg/mL;300mL/btl 5mL BID	癲癇	暈眩、嗜睡
		無力感、厭食
Ketosteril(Amino Acids) /tab 2# TID	慢性腎不全胺基酸補給	高血鈣
Kremezin 500mg/2g/pk 1PK QD	尿素吸附劑	腸胃症狀
Kalimate powder 5g/pk 1PK QD	降血鉀	便祕、厭食
		腸阻塞
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Lactulose 666mg/mL 300mL/btl 30mL QD	便祕、肝昏迷	腹痛、噁心
	肝系腦病變	食慾不振
Livalo 2mg/tab 1# QD	降血脂	肌痛、腹瀉
Lasix(Rosis) 40mg/tab 1# QD	利尿、高血壓	口乾、電解質不平衡
Lipitor(Atorvastatin) 10mg/tab 1# BID 	降血脂	肌肉痙攣
		排尿困難
PITAvastatin Calcium 2mg/tab 1# QN	降血脂	肌肉痙攣
		排尿困難
LEEYO F.C. 10mg/tab 1# HS	憂鬱症	疲勞、噁心
Loperam(Imodium) 2mg/tab 1# TID	減緩腸道蠕動	腹痛、噁心
Lyrica(Pregabalin) 75mg/cap 1# HS	減少神經痛	頭暈、嗜睡
Legafen 10mg/tab 2# QID	解肌肉痙攣	低血壓、頭暈
Lflocin F.C. 500mg/tab 1.5# QDAC	抗生素	噁心、暈眩
Lexotan 3mg/tab 1# HS	焦慮	嗜睡、震顫
Lesyn F.C. 6mg/tab 1# QD	降血壓	水腫、心悸
Larpam 2mg/tab 1.5# HS	緩解焦慮	頭暈、嗜睡
Lomidine 10mg/tab 1# QD	抗組織胺	疲倦、口乾
Lendormin 0.25mg/tab 2# HS	助眠劑	暈眩、運動失調
		反應遲緩
Lexapro 10mg/tab 1# QD	憂鬱症	噁心、暈眩
Levetiracetam 500mg/tab 1# BID	抗癲癇	頭暈、喉嚨痛
Loperamide 2mg/cap 2# PRN	止瀉劑	脹氣、口乾
Levodopa 25/250mg/tab 1# TID	帕金森氏症	尿液偏紅
Levocetirizine(Levozine) HCL 5mg/tab 1# HS	抗過敏	嗜睡、腹痛
Linagliptin 5mg/tab 1# QD	降血糖	低血糖
Losartan 50mg/tab 1# QD	高血壓、糖尿病腎病變	暈眩、腹瀉、疲倦、低血壓
Lacidipine F.C.4mg/tab 1# QD	高血壓	心悸、水腫
Lorazepam(Lowen) 0.5mg/tab 1# HS	減緩焦慮	思睡、虛弱
Levofloxacin(Cravit) 500mg/tab 1# QD	抗生素	肝酵素上升
Levothyroxine sodium 100mcg 1# QD	甲狀腺素	心悸、神經質
Lenvima 4mg/tab 2# QD(不可磨)	分化型甲狀腺癌、腎細胞癌治療	高血壓、噁心、腸胃症狀
Lipanthyl Supra(Fenofibrate) 160mg/tab 1# QN(隨餐服用)	降血脂	背痛、肌痛、肝功能異常
Lote F.C.(Fluvoxamine maleate)100mg/tab 2# HS	重鬱症	噁心、嘔吐
	強迫症	
Lorastyne(Minlife) 10mg/tab 1# HS	緩解過敏	嗜睡、口乾
	花粉症	腸胃不適
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Madopar 250mg/tab 0.5# BID	帕金森氏症	厭食、味覺改變
MadoparHBS 100+25mg/cap 1# BID	帕金森氏症	厭食、味覺改變
Mirapex 0.25mg/tab 1# TID	帕金森氏症	嗜睡、眩暈
Memantine(Exmem/Witgen) 10mg/tab 1# BID	阿茲海默症	幻覺、困惑
Mosad 5mg/tab 1# TID	腸蠕動異常	亢奮、肝功能異常
Mosa 5mg/tab 1# TID	腸蠕動異常	腹瀉、口渴
Mopride 5mg/tab 1# BID	增加腸蠕動	腹瀉、口渴
Mosapride citrate 5mg/tab 1# BID	增加腸蠕動	腹瀉、口渴
Metociopramide 4.54mg/tab 1# TID	腸蠕動異常	思睡、錐體外路症候群
Methycobal(Mecobalamin) 500mcg/cap 1# TID	末梢神經障礙	腸胃症狀
Mesyrel 50mg/tab 1# HS	失眠、憂鬱症	疲勞、口渴
Mocalm(Deanxit) 0.5mg/10mg/tab 1# BID	憂鬱症	低血壓、複視
腹樂疏Macrolgol 4000 10g 1pack 	解便秘 	可能減少其他藥物吸收
(與其他藥物間格2小時)		
Miyarisan BM 40mg/1g/pack 1pack TID	益生菌(整腸)	少有
Methotrexate 2.5mg/tab 1# QW1	化學治療劑	血球減少、噁心、腸胃症狀、貧血、口腔潰瘍
Mubroxol(Ambroxol) 30mg/tab 1# TID	祛痰	噁心、嘔吐
Mephenoxalone 200mg/tab 0.5# TID	緩解肌痙攣	倦怠、頭暈
Methylprednisolone 4mg/tab 1# BID	類固醇	水腫、食慾增加
Methylprednisolone(Metholone)16mg/tab 1# QD	類固醇	水腫、食慾增加
Metformin HCL(Lodiglit) 500mg/tab 1# BIDAC	糖尿病	發疹、下痢
Mecorda 30mg/tab 1# TID 	咽頭炎、支氣管炎	頭痛、眩暈
MIGLITOL 100mg/tab 1# BID	糖尿病	脹氣、腹瀉
Montelukast 10mg/tab 1# HS	抗氣喘、過敏	運動機能亢進
Musco 30mg/tab 1# TID	袪痰	腸胃症狀
Magnesium oxide 250mg/tab 1# BID	制酸劑	腹瀉
Mexiletine HC1 100mg/tab 1# BID	心律不整	頭暈、心悸
Midorine 2.5mg/tab 1# TID	低血壓	心律不整
Morphine Sulfate 15mg/tab 0.5# QID	緩解重度疼痛	尿滯留、暈眩
Morcasin(Baktar) 400/80mg/tab 2# BID	抗生素	史蒂芬強森症候群(皮膚與黏膜嚴重過敏反應)、腸胃症狀、口炎
註：G6PD不可服用		
Metronidazole(Tolizole) 250mg/cap 1# Q6H	抗生素	頭痛、陰道分泌物、暈眩
Mephan(Dextromethorphan) 30mg/tab 1# BID	鎮咳	思睡、頭暈
Musco(Ambroxol) 30mg/tab 1# TID	祛痰	噁心、嘔吐
Manotin(Memantine) 10mg/tab 0.5# BID	阿茲海默症	精神混亂、水腫、腸胃症狀
	失智症	
Minocin(Minocycline) 100mg/cap 1cap Q12H	抗生素	過敏、腸胃症狀
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Neuroquel(Quetiapine) 25mg/tab 2# HS	躁症	嗜睡
Megazon PR(Quetiapine PR) 50mg/tab 2# HS	精神病用藥	嗜睡、緩脈
		腸胃症狀
Norvasc(Amlodipine) 5mg/tab 1# QD	降血壓	末梢水腫
		暈眩、潮紅
Nexium 40mg/tab 1# QDAC	十二指腸潰瘍	頭痛、噁心
	逆流性食道炎	腸胃症狀
Neurontin(Gabapentin) 100mg/cap 1# QD	癲癇、帶狀疱疹療	眼球震顫
		暈眩、嗜睡
Neurontin 300mg/cap 1# HS	癲癇治療	眼球震顫
		暈眩、嗜睡
Neurontin 600mg/cap 0.5# TID	抑制神經痛	嗜睡、暈眩
Noobica capsules 400mg/tab 1# BID	腦血管障礙	情緒激昂、神經質、噁心感
Nicorandil 5mg/tab 1# BID	狹心症	暈眩、潮紅
Nuspas 0.125mg/tab 1# BID	解平滑肌痙攣	復視、暈眩
Nootropil 400mg/cap 1# TID	腦血管障礙	錐體外症狀
Nootropil 2400mg/Pk 1pack QD	腦血管障礙	錐體外症狀
Nootropil(水劑) 200mg/mL；200mL/btl 2.5mL TID	腦血管障礙	錐體外症狀、暈眩
NovoNorm(Repaglinide) 1mg/tab 1# TID	糖尿病	低血糖
Nicametate 50mg/tab 1# BID	末梢血管障礙	潮紅、暈眩
Nidolium 10mg/tab 1# BID	止吐	口渴、女乳症
Nebilet(Nebivolol) 5mg/tab 1# HS	降血壓	乳糖不耐
	心臟病用藥	支氣管痙攣
Numient(carbidopa/levodopa) 25/100mg 1# TID	抗巴金森氏症	腸胃症狀、幻覺、過敏
Nobelin(levetiracetam) 500mg/tab 1# BID	癲癇	無力、嗜睡
Newmazole(carbimazole) 10mg/tab 1# QOD	甲狀腺亢進治療劑	頭痛、暈眩
		噁心、胃痛
		
		
		
		
		
		
		
		
Omezol(Omeprazole) 20mg/cap 1# QD	消化性潰瘍	頭痛、腹痛
Omelon(Losec) 20mg/ cap 1# QDAC	消化性潰瘍	頭痛、腹痛
Omeprotect E.M. 20mg/tab 1# QDAC	消化性潰瘍	頭痛
Orfarin(Warfarin) 1mg/tab 1# QD	抗凝血劑	出血、頭痛
		腸胃症狀
Otilonium bromide 40mg/tab 1# TID	腸躁症	暈眩、視力模糊
Olmetec 40mg/tab 1# QD	降血壓	頭暈
Oxbu Extended-release (Oxybutynin) 5mg/tab 1# QD	頻尿、失禁	便秘、噁心
(不可磨碎)	膀胱過動症	口乾、頭痛
		頭暈、嗜眠
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Pilian 4mg/tab 1# HS	抗組織胺	思睡、增重
Periactin(Cyproheptadine) 4mg/tab 1# TID	抗組織胺	嗜睡、噁心
Prednisolone(Donison) 5mg/tab 2# QD	類固醇	食慾增加
		消化不良
Pelion 4mg/tab 1# BID	抗組織胺	口乾、嗜睡
Pletaal(Cilostazol) 100mg/tab 1# QDAC	間歇性跛行	出血、暈眩
Plavix(Clopidogrel) 75mg/tab 1# QD	抗凝血劑	出血、腹痛
Pentoxifyline Retard F.C.400mg/tab 1# BID	末梢血循障礙	噁心、暈眩
Pentop 400mg/tab 1# BID	改善血循	胸痛、心跳快
Persantin 25mg/tab 1# TID	慢性狹心症	暈眩、虛弱
Propranolol(Inderal) 10mg/tab 1# QD	狹心症、緩脈	低血壓、倦怠
Panzolec 40mg/tab 1# QD	消化性潰瘍	頭痛、輕微腹瀉
Pozola 40mg/tab 1# QD	消化性潰瘍	腸胃症狀
Panho Enteric F.C. 40mg/tab 1# QDAC	消化性潰瘍	頭痛、腹脹
Pantoprazole(Pantoloc) 40mg/tab 1#  QDAC	消化性潰瘍	頭痛、腹脹
Potassium Gluconate 595mg/tab 1# BID	鉀離子補充	噁心、腹痛
Pyridostigmine 60mg/tab 1# QID	治療肌無力	唾、汗液增加、肌肉痙攣
Panadol 500mg/tab 1# QID	解熱、鎮痛	過敏、肝毒性
Pirespa 200mg/tab 1# QD 自費	特發性肺纖維化	胃部不適
Propylthiouracil 50mg/tab 1# BID	甲狀腺機能抑制劑	貧血、異常出血、過敏
Pravafen 40mg/tab/160mg/tab 1# QN	高血脂併冠心症	噁心、腹瀉
Phenprobamate 400mg/tab 1# BID	緩解肌肉緊張	發疹、暈眩
Polyethylene Glycol 4000 舒腹樂10gm/pack 1pack QD (Forlax)	便祕	腹痛、腹瀉
Phenazopyridine 50mg/tab 1# TID (Pyridine)	尿路障礙	失眠、頭痛
Pravastatin(Mevalotin) 40mg/tab/ 1# QN	降血脂	腹脹、便秘
Pradaxa(Dabigatran)110mg/cap 1# BID	抗凝劑	噁心、腹瀉
Plaquenil  200mg/tab 1# BID	紅斑性狼瘡、風濕性關節炎、瘧疾	噁心、腹瀉、厭食
Panzyme(Pancreatin/Metoclopramide)212.5mg/5mg 1# BID	消化機能異常	發汗、焦躁、倦怠
Proscar(Finasteride) 5mg/tab 1# QD 	良性前列腺增生	性慾減低、精液減少
Piotas(Pioglitazone HCl) 30mg/tab 0.5# QD	降血糖	疲倦、水腫
		
		
Qting(康停懸液劑) 120mL/Bot  25mg/tab/mL 2mL HS	助眠	消化不良
	精神疾患	體重增加
Queropin 200mg/tab 0.5# HS	思覺失調症	無力、心悸
Q-piNe XR 200mg/tab 1# HS	思覺失調症	低血壓、便祕
Quetiapine(Neuroquel) 25mg/tab 1# HS	思覺失調症	低血壓、增重
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Rivotril 2mg/tab 1# HS	抗焦慮、助眠	暈眩、運動失調
	抗癲癇	反應遲緩
Rivopam 0.5mg/tab 1# BID	癲癇、鎮靜	步態不穩、頭暈
Risperdal 1mg/tab 0.5# QD	思覺失調症	失眠
Risperidone 2mg/tab 0.5# QD	思覺失調症	頭痛、躁動
Rivastigmine 1.5mg/tab 1# BID	失智症	頭暈、噁心
Reason 50mg/tab 1# TID	痰液排出困難	皮疹、厭食
Relinide 1mg/tab 1# TID	降血糖	低血糖
Ropinirole 2mg/tab 1# HS	帕金森氏症	低血壓、嗜睡、便秘、水腫
	腳步躁動症	
Rivaroxaban 15mg/tab 1# QD	抗凝血劑	異常出血
Radi-K 595mg/tab 1# BID	鉀離子補充	腹痛、腹瀉
Repaglinide 1mg/tab 1# BID	降血糖	降血糖
Rosuvastatin(Crestor) 10mg/tab 1# QD	降血脂	肌痛、橫紋肌溶解
Rivast(Rivastigmine) 2mg/tab 3ml BID	失智症	頭暈、噁心
Rivotril  0.5mg/tab 1# HS	鎮靜、安眠	嗜睡、暈眩
Rytmonorm(Propafenone) 150mg/tab 1# BID	心律不整	食慾不振、噁心
roSTAN(BETA-AESCIN) 20mg/cap 1# TID	促進淋巴流抑制血管透過性異常亢進及炎症局部浮腫、腫脹	胃腸道症狀
		頭暈、頭痛
		瘙癢
		
		
		
		
		
		
		
		
		
		
SanYL 50mg/tab 1# BID	末梢血循障礙	腹痛、心悸、頭暈
Sandel S.C 50mg/tab 1# QD	狹心症	頭暈
Sennoside 20mg/tab 2# HS	解便秘	腹瀉
Sennoside A+B 12.5mg/tab 3# HS	解便秘	尿液呈紅色
		糞便呈黑色
Sennapur 12.5mg/tab 1# HS	解便秘	尿液呈紅色
		糞便呈黑色
Seroquel 25mg/tab 2# HS	緩和情緒	嗜睡、暈眩
Silymarin 70mg/cap 1# BID	肝障礙	輕瀉、利尿
Silodosin 8mg/tab 1# QD	前列腺相關排尿障礙	口渴、低血壓
Sodium bicarbonate 600mg/tab 1# QD	消化不良	脹氣、口渴
Strocain 5/244mg/tab 1# TID	急、慢性胃炎	口渴、頭痛
Spirotone 25mg/tab 1# BID	利尿、高血壓	高血鉀
Spironolactone 25mg/tab 1# QD	消水腫、降壓	高血鉀
Sinphadol 25mg/tab 1# BID	內耳障礙	嗜睡
Smilon F.C.(Mirtazapine) 15mg/tab 2# HS	憂鬱症	嗜睡、暈眩
Sodicon 15mg/tab 1# BID	鎮咳	便祕、嗜睡
Sodicon-G 30/200mg/tab 1# TID	鎮咳	便祕、嗜睡
Sevikar 5mg/20mg/tab 1# BID	降血壓	水腫、頭暈
Sevikar HCT 40/5/12.5mg/tab 1# QD	降血壓	水腫、頭暈
Syntrend 25mg/tab 0.5# BID	降血壓、鬱血性心衰竭	疲倦、頭痛、暈眩
Solaxin 200mg/tab 1# HS	肌肉鬆弛劑	腸胃症狀、嗜睡
Singulair 10mg/tab 1# HS	預防性治療氣喘	過敏、嗜睡
Silence 1mg/tab 1# HS	鎮靜、安眠	倦怠、嗜睡
Superocin 250mg/tab 1# Q12H	抗生素	腹瀉、紅疹
Syntam 1200mg/tab 1# QD	腦血管障礙	躁動、疲倦
Smecta powder 3g/pack 1pack TID	治療腹瀉	便祕
Switane 2mg/tab 1# BID	帕金森氏症	噁心、視力模糊、神經質
Sodicon-G 30/200mg/tab 1# TID	鎮咳、袪痰	眩暈、嗜睡
Sertraline HCL 50mg/tab 1# HS	憂鬱症	躁症、尿滯留
Saxagliptin 5mg/tab 1# QD	糖尿病	頭痛、鼻竇炎
Sodium Chloride(Nacl) 600mg/tab 1# TID	補充鈉	腸胃不適
Sigmart 5mg/tab 1# BID	狹心症	暈眩、倦怠
Silodosin(Urief) 8mg/tab 1# QD	前列腺肥大	姿位性低血壓
Stilnox 10mg/tab 1# HS	鎮靜、安眠	暈眩、肌無力
Secorine 120ML 10C.C. HS	感冒糖漿	發疹、嘔吐
Spasmotin(Hyoscyamine) 0.125mg/tab 1# TID	胃腸消化劑	口乾、嗜睡
Stalevo 100/25/200mg/tab 1.5# QD	巴金森氏症	疲倦、異動症、尿液變色
Sinemet(carbidopa/levodopa) 25/100mg/tab 1# TID	帕金森氏症	噁心、頭暈
	肌肉震顫	失眠、混亂
		動作障礙
Sinflo(Ofloxacin) 200mg/tab 1# BID	抗感染藥物	陰道疼痛、睡眠障礙
SOMA(Acetaminophen/Chlorzoxazone/Thiamine Disulfide/Caffeine anhydrous)  250mg/150mg/7.7mg/20mg/cap 1# BID	解痙	過敏、橙色尿液
Sunpylon(Sulpiride) 50mg/tab 1# HS	消化性潰瘍	嗜睡、便祕
	安定情緒	不自主運動
Senin F.C. (ginkgo)(ginkgoflavone glycoside) 9.6mg/tab 1# BID	末梢血循障礙	腸胃不適
		過敏、頭痛
SmofKabiven Emulsion 1448mL/bag 1bag TN QD	靜脈營養輸注	血栓靜脈炎、寒顫、嘔吐
Synzar(Loasrtan Potassium) 50/12.5mg/tab 1# QD	降血壓	暈眩、水腫
		
		
		
		
		
		
		
		
		
		
Talopram易復樂 1mg/tab/1mL 5mL QD	鬱症、恐慌症	頭痛
Thoin S.R 125mg/tab 1# BID	氣喘	心悸、發抖
Trimsoan 3mg/tab 1# BID	支氣管擴張	心悸、噁心
Trajenta DUO 2.5+850mg/tab 1# BID	糖尿病	鼻咽炎、腹瀉
Trajenta(Linagliptin) 5mg/tab 1# BID	糖尿病	鼻咽炎、腹瀉
Telmisartan 40mg/tab 1# QD	降血壓	呼吸道感染
Topiramate Film-Coated 50mg/tab 1# BID	癲癇用藥	疲倦、厭食
Takepron OD 30mg/tab 1# QDAC	消化性潰瘍	口渴、嗜睡
Terntal 400mg/tab 1# TID	周邊循環障礙	頭暈、胸悶
Through 12mg/tab 2# QN	解便秘	尿液呈紅色
		糞便呈黑色
Thoin SR 250mg/tab 1# QD	氣喘	心灼熱、心悸、睡眠障礙
Tamsulosin HCL SR 0.2mg/tab 1# BID	前列腺肥大	眩暈、姿位性低血壓
Thyroxine Sodium 100μg 1# QD	甲狀腺激素補充	心律不整、腹瀉
Tritace 2.5mg/tab 1# QD	降壓、心肌梗塞後的心衰竭可用	乾咳、頭痛
Theophylline Anhydrous 200mg/tab 1# BID	支氣管擴張劑	噁心、失眠、心悸
Trazodone 50mg/tab 1# HS (Mesyre)	憂鬱症	口乾、嗜睡
Trospium Chloride 10mg/tab 1# TID（Uracare）	解痙、鎮痛	便秘、嗜睡
Trihexyphenidyl(swiTANE) 2mg 1# BID	巴金森氏症	口乾、低血壓、噁心、神經質
Twynsta(Telmisartan+Amlodipine)80/5mg 1# QD	高血壓	周邊水腫、上呼吸道感染、高血鉀、眩暈、背痛
Transamin 250mg/cap 1# TID 	止血	噁心、食慾不振
Trental(Pentoxifylline) 400mg/tab 1# QD 	促末梢血循	噁心、暈眩
Tramacet(Tramadol HCl/Acetaminophen) 37.5+325mg/tab 1# Q6H/PRN	止痛	噁心、暈眩
Tagrisso(Osimertinib) 80mg/tab 1# QD	抗腫瘤劑	腸胃症狀
		
		
		
Ultracet(Utraphen) 37.5+325mg/tab 1# BID	止痛	暈眩、嗜睡
Ulstop F.C 20mg/tab 1# BID	消化性潰瘍	便祕、腹瀉
Urecholine 25mg/tab 1# TID	治閉尿、腹脹	尿急、流淚
Unasyn 375mg/tab 1# Q12H	抗生素	過敏、肝負擔
Ursodeoxycholic(Uroso) 100mg/tab 1# TID	利肝膽劑	噁心、軟便
Quetiapine(Utapine F.C.) 25mg/tab 1# HS 	思覺失調症	低血壓、暈眩
	躁鬱症	高血糖、便秘
Uretropic(Furosemide) 40mg/tab 1# QD	利尿劑	疲倦、肌痙攣
Uliden(Ursodiol) 100mg/tab 1# TID	膽結石	頭痛、背痛
		腸胃症狀
Urinorm(Benzbromaron) 100mg/tab 2# QD	高尿酸血症	腸胃症狀
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Vit.B6 50mg/tab 1# QD	補充維生素	少有
Vimpat 100mg/tab 2# BID	癲癇	頭暈、噁心
Valdoxan 25mg/tab 0.5# HS	憂鬱症	頭痛、暈眩
Valsartan(Vosaa) 80mg/tab 1# QD	降血壓	頭痛、眩暈
Valproic Acid 500mg/tab 1# TID	抗癲癇	易怒、顫抖
Valproate Sodium Solution 200mg /mL;40mL/BT 5mL TID	抗癲癇	噁心、震顫
VALPROATE SODIUM S.R. 500mg/tab 1# BID	抗癲癇	肝功能障礙、震顫
Vildagliptin 50mg/tab 1# QDAC	降血糖	震顫、暈眩
Vytorin(Ezetimibe/Simvastatin) 10/20mg/tab 1# QD	高膽固醇血症	脹氣、肌痛
		頭痛
Valtrex(Valaciclovir) 500mg/tab 2# TID	抗過濾性病毒	噁心、血小板減少、頭痛
Vesicare(Solifenacin) 5mg/tab 1# HS	膀胱過動症	口乾、便秘
		頭暈、乾眼
Vemlidy 25mg/tab 1# QD(與食物並用)	治療成人慢性B型肝炎	腸胃症狀
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Wecoli 25mg/tab 1# TID	增加腸蠕動	心跳過慢、昏厥、呼吸短促
	治療尿滯留	
Winsumin 50mg/tab 1# HS	精神狀態障礙	手抖、頭暈
Weren 50mg/tab 1# TID	消炎止痛	腸胃症狀
Warfarin 5mg/tab 1# QD	抗凝血劑	異常出血
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Xarelto 10mg/tab 1# QD	預防血栓	頭暈、出血
XyzaL 5mg/tab 1# QD	抗過敏藥	口乾、疲勞
Xanthium 200mg/cap 1# QD	氣喘、支氣管痙攣	心悸、緊張
		失眠
Xanax XR 0.5mg/tab 0.5# HS	緩解焦慮、恐慌	暈眩、嗜睡
Xigduo XR 10mg/tab+1g 1# QD	第二型糖尿病	低血糖、感染
(Dapagliflozin/Metformin)		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
You-jet 50mg/tab 1# HS	鬱症、精神病	嗜睡、口乾
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
Zyprexa zydus 5mg/tab 1# HS 	思覺失調症	嗜睡
Zoco 100mg/tab 1# TID	止咳	麻木感、胃部不適
Zinc gluconate 78mg/tab 2# QD	鋅補充	少有
Zyvox 600mg/tab 1# Q12H	治療細菌性感染(結核菌)	腹瀉、頭痛
		噁心、嘔吐
Zolpidem 10mg/tab 1# HS	失眠	頭暈、頭痛
Zatizen(Ketotifen) 1mg/tab 1# BID	過敏性支氣管炎	鎮靜、眼球震顫
(抗組織胺)	支氣管性氣喘	
Zulitor(Pitavastatin Calcium) 4mg/tab 1# QD	降血脂	肌肉痛、腹瀉
Azithromycin(Zithromax)/tab 1# Q1.3.5/QD 	抗生素	腹瀉、腹部不適
Zolon(Zopiclone) 7.5mg/tab 1# HS	失眠	口苦、倦怠
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
NovoRapid FlexPen 300IU/3mL 12IU SC QDAC	降血糖	低血糖
NovoMix 12IU SC QDAC	降血糖	低血糖
Toujeo 450IU/1.5mL 8IU SC HS	降血糖	低血糖
Ryzodeg FlexTouch 70/30 10IU SC BIDAC	降血糖	低血糖
Tresiba Flex touch 300iu/3mL 5IU SC QD	降血糖	周邊水腫
		體重增加
Humlog mix 50 Kwikpen 300IU/3mL/pen 22IU SC QD	降血糖	低血糖
Humalog mix50 KwikPen 300U/3mL 18U TID SC	胰島素	低血糖
		
		
		
		
Exelon patch 109.5mg/tab 1patch EXT	失智症	接觸性皮膚炎
Clopain gel(Diclofenac sod. Gel) 10mg/gm 20gm/tube 1tube EXT	皮膚鎮痛止癢	皮膚紅腫、發癢
Lomeane 1mg/Gm 15gm/tub TOP EXT TID	皮質類固醇藥膏	患處易感染過敏、刺激
C.B oint 5gm/tub TOP EXT TID	抗組織胺藥膏	皮膚局部刺激、過敏
Septon soln 0.064% 10gm/tub TOP EXT TID	類固醇藥膏	患處易感染過敏、刺激
Fusidic acid cream 2% 5gm/tub TOP EXT TID	抗生素藥膏	局部刺激、疼痛
MYCOMB Cream 16gm/tub TOP EXT 	抗生素藥膏	局部刺激
Ichderm Cream 50mg/g(5%) 15g/tub EXT BID	止癢	嗜睡、皮膚刺痛、燒灼感
Teiria GEL 10% 40g/tub EXT TID	止痛、消腫	過敏、局部刺激
		
		
		
spiriva respimat適喘樂舒沛噴吸入劑 1puff BID INHL	持續性氣喘	暈眩、視力模糊
	慢性阻塞性肺病	
Seretide Evohaler 使肺泰吸入劑 2puff BID INHL	可逆性呼吸道阻塞疾病	咽喉炎、心悸
Berodual-N 200dose/btl 備喘全定量噴霧液 1puff  TID INHL	預防支氣管氣喘	局部刺激、心悸、緊張
必肺宜氣化噴霧劑	抗膽鹼藥物	咳嗽、心悸
Glycopyrronium/Formoterol fumarate Aerosphere 7.2/5mcg/puff; 120puffs 2puff BID INHL	支氣管擴張劑	尿滯留、過敏
		視力模糊
Chlorhexidine GARGLE 2mg/mL; 200mL/bot 15mL BID GAR(漱口劑)	口腔消毒、清潔、去除口臭	牙面變黃、暫時味覺改變
20mL 0.45% Sodium Chloride 5 mL Q6H IH	稀化痰液	少有
Spiolto 2.5mcg/puff 2puff QD	適用慢性阻塞性肺病之長期護理	口乾、便秘
(乾粉吸入劑)		尿滯留、心悸
Seroflo 250 Evohaler吸洛復 250吸入劑 2puff BID(Fluticasone/Salmeterol propionate evohal)	氣喘、慢性阻塞性肺病	聲音嘶啞、震顫
		心悸、頭痛
0.45%NaCl 20mL/amp 0.2瓶 QID INH	稀化痰液	咳嗽
0.9%NaCl 20mL/amp 20mL DI QD	水分補給	少有，大量急速投與可能血清電解質異常、鬱血性心不全、浮腫及酸中毒

`;

  let result = [];
  let buffer = null;

  raw.split('\n').forEach(line => {
    line = line.trim();
    if (!line) return;
    const parts = line.split('\t').map(x => x.trim()).filter(Boolean);
    if (parts.length >= 3) {
      if (buffer) result.push(buffer);
      buffer = { drugName: parts[0], effect: parts[1], sideEffect: parts[2] };
    } else if (parts.length === 2) {
      if (buffer) { buffer.effect += '、' + parts[0]; buffer.sideEffect += '、' + parts[1]; }
    } else if (parts.length === 1) {
      if (buffer) buffer.sideEffect += '、' + parts[0];
    }
  });

  if (buffer) result.push(buffer);
  return result;
})();