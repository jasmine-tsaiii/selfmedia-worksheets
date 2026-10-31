/* 學員提交功能的設定。
   submitUrl 留空 = 不啟用（學習單照舊，只存在學員自己的瀏覽器）。
   貼上 Apps Script 網頁應用程式的網址（以 /exec 結尾）後，帶有專屬連結（?s=代碼）的學員
   就會看到「提交給老師」。沒有專屬連結的人看不到，也不會被影響。 */
window.SMCOURSE_CONFIG = {
  submitUrl: ''
};
