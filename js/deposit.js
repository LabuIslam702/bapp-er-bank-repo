document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    

    const depositAmount = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    depositAmount.innerText = currentDepositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value = '';
})