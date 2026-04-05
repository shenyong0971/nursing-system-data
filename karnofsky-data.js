const karnofskyRawText = `
0級 完全活動
1級 能步行及維持輕度工作
2級 能步行及維持大部分自我照顧
3級 僅維持有限的自我照顧，超過50％以上的清醒時間，活動限於床上和椅子上
4級 完全無活動，無法進行自我照顧，完全限制在床上或椅子上
`.trim();

function getKarnofskyOptions() {
  return karnofskyRawText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      const match = line.match(/^(\S+)\s+(.+)$/);
      if (!match) return null;

      return {
        value: match[1],
        label: line,
        code: match[1],
        name: match[2]
      };
    })
    .filter(item => item !== null);
}