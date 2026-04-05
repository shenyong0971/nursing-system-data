const referralUnitRawText = `
高銘診所
欣民診所
佳禾診所
陳台柱診所
其安診所
安心診所
優醫五權健康診所
家康居家醫療照護團隊
家寶社會福利慈善事業基金會A單位
童綜合醫院附設居家護理所
`.trim();
function getReferralUnits() {
  const baseList = referralUnitRawText
    .split(/\r?\n/)
    .map(x => x.trim())
    .filter(x => x);

  const saved = JSON.parse(localStorage.getItem("referralUnits") || "[]");
  const excluded = JSON.parse(localStorage.getItem("referralUnitsExcluded") || "[]");

  // 合併 + 去重 + 排除已移除的
  const all = [...new Set([...baseList, ...saved])];
  return all.filter(x => excluded.indexOf(x) === -1);
}
