function getValue(findField){
    const getValue = document.getElementById(findField);
    const getValueText = getValue.value;
    const getAmount = parseFloat(getValueText);
    // clear section
    getValue.value = '';
    return getAmount;
}
function updateBalance(previousField, getAmount){
    const previous = document.getElementById(previousField);
    const previousText = previous.innerText;
    const previousAmount = parseFloat(previousText);
    previous.innerText = previousAmount + getAmount;
}
function updateTotalBalance(totalID){
    const getTotal = document.getElementById(totalID);
    const getTotalText = getTotal.innerText;
    const previousTotalAmount = parseFloat(getTotalText);
    return previousTotalAmount;
}
function getTotalBalance(getAmount, isAdd){
    const previousTotalField = updateTotalBalance('balance-total');
    if(isAdd == true){
        document.getElementById('balance-total').innerText = previousTotalField + getAmount;
    }
    else if(isAdd == false){
        document.getElementById('balance-total').innerText = previousTotalField - getAmount;
    }
}

document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmount = getValue('deposite-amount');
    if(depositeAmount > 0){
        updateBalance('deposite-total', depositeAmount);
        getTotalBalance(depositeAmount, true);
    }

})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getValue('withdraw-amount');
    const checking = updateTotalBalance('balance-total');
    if(withdrawAmount > 0 && checking >= withdrawAmount){
        updateBalance('withdraw-total', withdrawAmount);
        getTotalBalance(withdrawAmount, false);
    }

})