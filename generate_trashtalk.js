// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function

function generateTrashTalk() {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // define dummy data
  const options = {
    blankRadio: 'designer',
  }

  // 取得 user 的選擇
  // 給 user 選擇角色中隨機的幹話組合
  let option = []

  if (options.blankRadio === 'designer') {
    option = option.concat(task.designer)
    let word = sample(option)
    console.log(`身為一個設計師，${word}，很容易吧！`)
  } else if (options.blankRadio === 'engineer') {
    option = option.concat(task.engineer)
    let word = sample(option)
    console.log(`身為一個工程師，${word}，很容易吧！`)
  } else if(options.blankRadio === 'entrepreneur') {
    option = option.concat(task.entrepreneur)
    let word = sample(option)
    console.log(`身為一個創業家，${word}，很容易吧！`)
  }

  if (!options.blankRadio) {
    return '還沒選擇幹話的對象哦！'
  }

  // 回傳
  console.log('This function will generate trash talk!')
}

generateTrashTalk()