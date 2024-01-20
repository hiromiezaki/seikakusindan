const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("性格診断プログラム");
console.log("--------------------");

rl.question("1. 自分をどのように表現することが多いですか？ (楽観的、内向的、冷静など) ", (answer1) => {
  rl.question("2. 休日に好きなことは何ですか？ 
    rl.question("3. ストレスがたまったらどうしますか？ (散歩する、友達と話す、ゲームするなど) ", (answer3) => {
      // ここでユーザーの回答をもとに性格を診断
      const personality = diagnosePersonality(answer1, answer2, answer3);
      console.log("--------------------");
      console.log("あなたの性格診断結果: " + personality);
      rl.close();
    });
  });
});

// ユーザーの回答に基づいて性格を診断する関数
function diagnosePersonality(answer1, answer2, answer3) {
  // ここで回答に応じた性格を診断し、適切なメッセージを返すロジックを記述します
  // この例では簡単な診断ロジックを示していますが、実際の診断はもっと複雑で詳細になります
  if (answer1.toLowerCase().includes("楽観的") && answer2.toLowerCase().includes("旅行") && answer3.toLowerCase().includes("散歩")) {
    return "あなたは楽観的で冒険心旺盛な性格です！";
  } else if (answer1.toLowerCase().includes("内向的") && answer2.toLowerCase().includes("読書") && answer3.toLowerCase().includes("友達と話す")) {
    return "あなたは内向的で知識欲が旺盛な性格です！";
  } else {
    return "あなたの性格は難しいですね。もっと質問してみてください。";
  }
}