const clinicDoctorRawText = `
3517063896|佳禾診所|陳健民
3503190362|天乙診所|劉穎謙
3536100154|陳台祝診所|陳台祝
3536100449|長安診所|呂國樑
3536160196|其安診所|葉其祥
3536161308|明安診所|王明倫,鄧麗梅
3536061241|安心診所|孔令天
3536161326|欣民診所|蔡政潔
3536050391|高銘診所|王崇輝
3503040116|優醫五權健康診所|黃冠智
1536060037|明德醫院|沈耿裕
3536101464|吳耳鼻喉科|吳鳳旗
3536180269|陳儀崇診所|陳儀崇
3503150073|慈祐診所|茅亞華
3503010369|如毅診所|侯昭祥,黃煌洲,張祥宇
3503260878|天行健診所|陳美如,黃文鴻,林奇模,宋兆家,魏善華,傅進華,朱柏宇
3503250327|欣悅診所|陳弘偉
3536192524|勤益診所|葉國枝
`.trim();

function getClinicDoctorList() {
  return clinicDoctorRawText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      const parts = line.split("|");
      if (parts.length < 3) return null;

      const code = parts[0].trim();
      const clinic = parts[1].trim();
      const doctors = parts[2]
        .split(",")
        .map(name => name.trim())
        .filter(name => name);

      return {
        code,
        clinic,
        doctors
      };
    })
    .filter(item => item !== null);
}

function getClinicOptions() {
  return getClinicDoctorList().map(item => ({
    code: item.code,
    clinic: item.clinic
  }));
}

function getDoctorsByClinic(clinicName) {
  const found = getClinicDoctorList().find(item => item.clinic === clinicName);
  return found ? found.doctors : [];
}