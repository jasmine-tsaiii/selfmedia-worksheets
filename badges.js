/* 徽章設定：總覽頁和每一堂的學習單共用。
   條件：ids＝要填的欄位 id（全部填才算；min＝只要填到幾個）；ai＝至少複製過幾個 AI prompt；cleared＝整堂破關。 */
(function () {
  var rep = function (pre, n, f) { var a = []; for (var i = 1; i <= n; i++) a.push(pre + i + f); return a; };
  var seq = function (pre, n) { var a = []; for (var i = 1; i <= n; i++) a.push(pre + i); return a; };

  window.SMBADGES = [
    { id: 'l1-goal', lesson: 1, icon: '🎯', name: '目標達人', desc: '寫完目標卡的三句話', ids: ['g1', 'g2', 'g3'] },
    { id: 'l1-expose', lesson: 1, icon: '🎭', name: '曝光決策者', desc: '決定要用什麼名字、要不要露臉', ids: ['e1', 'e2'] },
    { id: 'l1-block', lesson: 1, icon: '🧗', name: '卡點勇者', desc: '說出一個卡點', ids: ['k1'] },
    { id: 'l1-pos', lesson: 1, icon: '✍️', name: '定位開路者', desc: '寫出一句話定位 v0', ids: ['l1', 'l2', 'l3', 'l4'] },
    { id: 'l1-bench', lesson: 1, icon: '🔍', name: '對標獵人', desc: '找到至少 3 個對標帳號', ids: rep('p3_', 5, '_name'), min: 3 },
    { id: 'l1-ai', lesson: 1, icon: '🤖', name: 'AI 夥伴', desc: '用 AI 陪練試一次', ai: 1 },
    { id: 'l1-clear', lesson: 1, icon: '🏁', name: '第 1 關破關', desc: '完成第 1 堂所有必填任務', cleared: true },

    { id: 'l2-aud', lesson: 2, icon: '🧑‍🤝‍🧑', name: '受眾描繪師', desc: '描繪出一個具體的人', ids: ['a_name', 'a_state', 'a_say'] },
    { id: 'l2-pain', lesson: 2, icon: '💭', name: '煩惱探測員', desc: '寫出至少 8 個煩惱', ids: seq('c', 10), min: 8 },
    { id: 'l2-lang', lesson: 2, icon: '🗣️', name: '語言收集家', desc: '收集 10 條受眾的原話', ids: seq('lg', 20), min: 10 },
    { id: 'l2-lang20', lesson: 2, icon: '📚', name: '語言庫大師', desc: '語言庫補到 20 條', ids: seq('lg', 20) },
    { id: 'l2-pos', lesson: 2, icon: '🧭', name: '定位升級', desc: '把定位寫成 v1', ids: ['n1', 'n2', 'n3', 'n4'] },
    { id: 'l2-story', lesson: 2, icon: '📖', name: '故事作者', desc: '寫完個人故事四格', ids: ['sy1', 'sy2', 'sy3', 'sy4'] },
    { id: 'l2-clear', lesson: 2, icon: '🏁', name: '第 2 關破關', desc: '完成第 2 堂所有必填任務', cleared: true },

    { id: 'l3-id', lesson: 3, icon: '🪪', name: '門面設計師', desc: '決定名稱與頭像', ids: ['id_pick', 'nm_show', 'av_desc'] },
    { id: 'l3-bio', lesson: 3, icon: '📝', name: '三行簡介', desc: '寫完簡介主版三行', ids: ['bio1', 'bio2', 'bio3'] },
    { id: 'l3-tone', lesson: 3, icon: '🎙️', name: '語氣設定師', desc: '寫出 5 個「我會這樣說」', ids: seq('say', 5) },
    { id: 'l3-real', lesson: 3, icon: '🧪', name: '真人測試員', desc: '完成 3 個真人 3 秒測試', ids: rep('r7_', 3, '_says') },
    { id: 'l3-ai', lesson: 3, icon: '🤖', name: 'AI 校驗員', desc: '用 AI 校驗過自己的門面', ai: 1 },
    { id: 'l3-clear', lesson: 3, icon: '🏁', name: '第 3 關破關', desc: '完成第 3 堂所有必填任務', cleared: true },
  ];

  function filled(v) { return Array.isArray(v) ? v.length > 0 : (typeof v === 'boolean' ? v : !!(v && String(v).trim())); }
  /* st = { values, ai, cleared }（就是每堂存在 localStorage 的狀態） */
  window.SMBADGE_EVAL = function (b, st) {
    st = st || {};
    if (b.cleared) return !!st.cleared;
    if (b.ai) return Object.keys(st.ai || {}).length >= b.ai;
    var v = st.values || {}, ids = b.ids || [];
    var n = ids.filter(function (id) { return filled(v[id]); }).length;
    return n >= (b.min || ids.length);
  };
})();
