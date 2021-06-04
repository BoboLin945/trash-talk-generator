// define sample function to randomly return a item in an array
function randomItem(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function

function generateTrashTalk(character) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 取得 user 的選擇
  // 給 user 選擇角色中隨機的幹話組合
  let trashTalk = []

  if (character.choice === 'designer') {
    trashTalk = trashTalk.concat(task.designer)
    let action = randomItem(trashTalk)
    let adj = randomItem(phrase)
    return `身為一個設計師，${action}，${adj}吧！`
  } else if (character.choice === 'engineer') {
    trashTalk = trashTalk.concat(task.engineer)
    let action = randomItem(trashTalk)
    let adj = randomItem(phrase)
    return `身為一個工程師，${action}，${adj}吧！`
  } else if (character.choice === 'entrepreneur') {
    trashTalk = trashTalk.concat(task.entrepreneur)
    let action = randomItem(trashTalk)
    let adj = randomItem(phrase)
    return `身為一個創業家，${action}，${adj}吧！`
  }

  if (!character.blankRadio) {
    return '還沒選擇幹話的對象哦！'
  }

}

module.exports = generateTrashTalk