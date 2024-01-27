const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("性格診断プログラム");
console.log("--------------------");

rl.question("1. アメリカとイギリスはどちらが好きですか？ ", (answer1) => {
 let question2 = ""
  if (answer1 == "イギリス") { 
    question2 = "壮大で劇的な音楽スタイルに興味がありますか？ "
  } else if (answer1 == "アメリカ") { 
    question2 = "トレンドを追いかけることやスタイルの変化に興味がありますか？ "
  }



  
  rl.question("2. " + question2, (answer2) => {
    
      // ここでユーザーの回答をもとに性格を診断
      const personality = diagnosePersonality(answer1, answer2)

      console.log("--------------------");
      console.log("あなたの性格診断結果: " + personality);
      rl.close();
   
  });
});

// ユーザーの回答に基づいて性格を診断する関数
function diagnosePersonality(answer1, answer2) {
  if (answer1 == "イギリス" && answer2 == "はい") { 
    return "クイーン";
  }
  if (answer1 == "イギリス" && answer2 == "いいえ") { 
    return "ビートルズ"
  }
  if (answer1 == "アメリカ" && answer2 == "はい") {
    return "マドンナ"
  }
  if (answer1 == "アメリカ" && answer2 == "いいえ") {
    return "レッドホットチリペッパー"
  }
}