function showPlan() {
    const ageInput = document.getElementById("age");
    const maritalInput = document.getElementById("marital");
    const resultBox = document.getElementById("resultBox");
  
    const age = Number(ageInput.value);
    const marital = maritalInput.value;
  
    if (!age || age < 18 || age > 100) {
      resultBox.innerHTML = "請輸入有效年齡（18～100 歲）。";
      return;
    }
  
    if (marital === "") {
      resultBox.innerHTML = "請選擇婚姻狀態。";
      return;
    }
  
    let result = "";
  
    if (marital === "married" && age < 65) {
      result = `
        <h3>試算結果：已婚期間方案</h3>
        <p>你目前較適合 <strong>家庭保障型</strong>。</p>
        <p>此階段保費較高，但保障範圍可延伸至配偶、子女與家庭生活責任。</p>
        <p>建議重點：家庭保障、交通意外保障、生活補助。</p>
      `;
    } else if (marital === "single" && age < 40) {
      result = `
        <h3>試算結果：四十歲前單身族群方案</h3>
        <p>你目前較適合 <strong>低保費、高回饋型</strong> 方案。</p>
        <p>此階段保費最低，年度安全回饋金最高，適合提早建立保障。</p>
        <p>建議重點：基本交通保障、醫療補助、長期續保回饋。</p>
      `;
    } else if (marital === "single" && age >= 40 && age < 65) {
      result = `
        <h3>試算結果：四十到六十五歲單身族群方案</h3>
        <p>你目前較適合 <strong>預繳型儲蓄＋保障並重</strong> 方案。</p>
        <p>可視需求選擇一般型、進階型或尊榮型方案。</p>
        <p>建議重點：交通意外保障、失能保障、保單價值累積。</p>
      `;
    } else if (marital === "single" && age >= 65) {
      result = `
        <h3>試算結果：退休單身族群方案</h3>
        <p>你目前較適合 <strong>高齡醫療失能保障型</strong>。</p>
        <p>此階段回饋比重降低，但醫療與失能保障提高。</p>
        <p>建議重點：醫療補助、失能保障、高齡生活支持。</p>
      `;
    } else if (marital === "married" && age >= 65) {
      result = `
        <h3>試算結果：高齡家庭保障延伸型</h3>
        <p>你目前較適合 <strong>高齡家庭延伸保障</strong>。</p>
        <p>可保留基本交通保障，並視需求加入高齡照護與家庭支持設計。</p>
      `;
    }
  
    resultBox.innerHTML = result;
  }
