const div = dom.find('#test>.red')[0];
dom.style(div,'color','red');

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素