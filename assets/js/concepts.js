// Single source of truth. Add a new concept object here; no HTML duplication needed.
window.PHYSICS_CONCEPTS = [
  {
    id: 'magnetic-monopoles', category: 'electromagnetism', tag: '電磁學',
    title: '馬克士威方程式真的證明磁單極不存在嗎？',
    subtitle: '一個寫成零的散度，究竟是定律、假設，還是自然界的答案？',
    level: '大學基礎', readMinutes: 4, accent: 'violet',
    intuition: '標準馬克士威方程組描述的磁場沒有磁荷來源：任意封閉曲面的淨磁通為零。但這不是單憑數學就證明自然界不可能有磁單極，而是現行電磁理論採用並受到實驗支持的描述。',
    equation: '\\nabla\\cdot\\mathbf{B}=0 \\quad\\Longleftrightarrow\\quad \\oint_S\\mathbf{B}\\cdot d\\mathbf{A}=0',
    equationNote: 'B 是磁場，S 為封閉曲面；積分式使用散度定理，且假設場在相關區域具備適用的正則性。若允許磁荷，方程式須引入相應源項。',
    misconception: '「因為方程式右邊是零，所以數學上已證明磁單極不可能存在。」',
    correction: '更精確地說，沒有磁荷是標準方程組的物理前提之一。若觀測到磁單極，就必須修改描述磁場來源的方程，而非宣告自然現象不可能。',
    question: '如果有一天發現某封閉曲面的淨磁通不是零，最先需要重新檢視的是哪一條方程式？',
    hint: '想想哪一條定律直接連結「封閉曲面的淨通量」與「場的來源」。',
    takeaway: '理論方程式與實驗事實相互約束，但要分清楚理論假設與經驗結論。',
    references: []
  },
  {
    id: 'photoelectric-effect', category: 'modern', tag: '近代物理',
    title: '為什麼提高光強，仍無法讓低頻光產生光電效應？',
    subtitle: '光強與頻率並不是同一種能量旋鈕。',
    level: '高中', readMinutes: 3, accent: 'orange',
    intuition: '在單光子光電效應的理想描述中，光的頻率決定單個光子可提供多少能量；光強則主要影響單位時間抵達的光子數。頻率低於閾值時，單個光子能量不足以克服金屬工作函數。',
    equation: 'K_{\\max}=h\\nu-\\phi',
    equationNote: 'Kmax 是逸出電子的最大動能，h 是普朗克常數，ν 是入射光頻率，φ 是材料工作函數。這是理想單光子光電效應的能量守恆關係。',
    misconception: '「光越亮，單個電子一定會被打得越快。」',
    correction: '固定光頻率且高於閾頻時，提高光強通常增加光電子發射率，不會改變由頻率決定的最大動能；實際觀測仍受材料與實驗條件影響。',
    question: '若光的頻率固定在閾頻之上，而光強減半，你預期最大動能和發射電子數量分別如何變化？',
    hint: '把「每顆光子的能量」和「每秒有多少顆光子」分開考慮。',
    takeaway: '頻率決定單光子能量；強度主要影響光子通量，兩者扮演不同角色。',
    references: []
  },
  {
    id: 'free-fall', category: 'mechanics', tag: '經典力學',
    title: '重的物體在真空中真的不會掉得比較快嗎？',
    subtitle: '重力變大了，慣性也同時變大了。',
    level: '高中', readMinutes: 3, accent: 'teal',
    intuition: '較重的物體受較大的重力，但也更難被加速。在近地表、忽略空氣阻力且重力加速度近似均勻的條件下，兩者的質量因素相互抵消，所以自由落體加速度相同。',
    equation: 'F_g=mg,\\qquad F_{\\mathrm{net}}=ma\\quad\\Rightarrow\\quad a=g',
    equationNote: 'm 是物體的慣性質量；在此近似中，重力質量與慣性質量等價，g 是當地重力加速度。推論假設只有重力作用。',
    misconception: '「比較重的物體受力比較大，所以加速度一定比較大。」',
    correction: '加速度取決於合力與質量之比，不只取決於力的大小；在有空氣阻力時，不同形狀和材質的物體可能有不同下落運動。',
    question: '如果兩個物體質量相差十倍，在真空中較重者的受力與加速度各是較輕者的幾倍？',
    hint: '先用 F=mg 比較受力，再將各自的合力除以質量。',
    takeaway: '判斷運動不能只看受力大小，還要看物體的慣性。',
    references: []
  },
  {
  id: 'electromagnetic-induction',
  category: 'electromagnetism',
  tag: '電磁學',
  title: '磁場存在，就一定會產生感應電流嗎？',
  subtitle: '真正重要的是穿過迴路的磁通量有沒有隨時間改變。',
  level: '高中',
  readMinutes: 4,
  accent: 'violet',

  intuition: '把一個閉合線圈放在穩定、靜止的磁場中，不一定有感應電流。關鍵在於穿過迴路的磁通量是否隨時間改變：移動磁鐵、改變線圈面積或轉動線圈，都可能造成磁通量改變，進而產生感應電動勢；若迴路閉合且有導電路徑，才可能有感應電流。',

  equation: '\\mathcal{E}=-\\frac{d\\Phi_B}{dt},\\qquad \\Phi_B=\\int_S\\mathbf{B}\\cdot d\\mathbf{A}',

  equationNote: 'ℰ 是沿指定迴路方向定義的感應電動勢，Φ_B 是穿過該迴路所圍曲面的磁通量，B 是磁場，dA 為有方向的面積元素；負號表示感應效應的方向遵守楞次定律。此式適用於固定迴路的磁通變化，對移動迴路則須將運動產生的電動勢一併考慮。',

  misconception: '「只要線圈放在磁場裡，就會一直產生感應電流。」',

  correction: '單純存在磁場並不足以產生感應電流。對固定迴路而言，必須有隨時間改變的磁通量，才有法拉第感應電動勢；即使產生電動勢，若電路不閉合，也不會形成持續繞行整個迴路的傳導電流。',

  question: '一個閉合線圈位於均勻磁場中：若磁場強度保持不變，但把線圈繞著與磁場垂直的軸慢慢轉動，會不會產生感應電動勢？你會先檢查哪個物理量？',

  hint: '不要只看磁場大小；想想磁場與線圈面積法向量的夾角是否改變。',

  takeaway: '判斷電磁感應時，先看磁通量是否改變，再確認迴路是否閉合，最後用楞次定律判斷感應方向。',

  references: []
}
];

