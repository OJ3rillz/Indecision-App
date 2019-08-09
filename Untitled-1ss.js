const supportedCards = {
      visa, mastercard
    };

    const countries = [
      {
        code: "US",
        currency: "USD",
        currencyName: '',
        country: 'United States'
      },
      {
        code: "NG",
        currency: "NGN",
        currencyName: '',
        country: 'Nigeria'
      },
      {
        code: 'KE',
        currency: 'KES',
        currencyName: '',
        country: 'Kenya'
      },
      {
        code: 'UG',
        currency: 'UGX',
        currencyName: '',
        country: 'Uganda'
      },
      {
        code: 'RW',
        currency: 'RWF',
        currencyName: '',
        country: 'Rwanda'
      },
      {
        code: 'TZ',
        currency: 'TZS',
        currencyName: '',
        country: 'Tanzania'
      },
      {
        code: 'ZA',
        currency: 'ZAR',
        currencyName: '',
        country: 'South Africa'
      },
      {
        code: 'CM',
        currency: 'XAF',
        currencyName: '',
        country: 'Cameroon'
      },
      {
        code: 'GH',
        currency: 'GHS',
        currencyName: '',
        country: 'Ghana'
      }
    ];

    const billHype = () => {
      const billDisplay = document.querySelector('.mdc-typography--headline4');
      if (!billDisplay) return;

      billDisplay.addEventListener('click', () => {
        const billSpan = document.querySelector("[data-bill]");
        if (billSpan &&
          appState.bill &&
          appState.billFormatted &&
          appState.billFormatted === billSpan.textContent) {
          window.speechSynthesis.speak(
            new SpeechSynthesisUtterance(appState.billFormatted)
          );
        }
      });
    };
      const appState = {};

      const formatAsMoney = (amount, buyerCountry) => {
     const findCurrency = ({country}) => country == buyerCountry
       let country = countries.find(findCurrency)
          if(!country) {
                country = {
                      code: "en-US",
                      currency: "USD"
                }
         return amount.toLocaleString(`en-${country.code}`, {
            style: 'currency',
                  currency: country.currency
             })
          }
    const flagIfInvalid = (field, isValid) => {
      if(isValid){
                field.classList.remove('is-invalid')
          } else {
                field.classList.add('is-invalid')
          }
    }
    const expiryDateFormatIsValid = (field) => {
          let isValid
          if (!/^(0|1)[0-9]\/[0-9]{2}$/.test(field.value)){
                return true
          } else {
           return true
          }

  const {value} = field
    const usersMonth = parseInt(value.split("/")[0]);
    const usersYear = parseInt("20" + value.split("/")[1])
    const usersCardExpiryDate = new Date(usersYear, usersMonth)
          isValid = usersCardExpiryDate > presentDate
          return isValid;
    }
      const detectCardType = (first4Digits) => {
         const firstDigit = field4Digits[0]
             const cardType = firstDigit == 4 ? 'is-visa' : firstDigit == 5? 'is-mastercard' : '';
             const creditCard = document.querySelector('[data-card-type]')
             if(cardType === 'is-visa') {
                   creditCard.classList.add('is-visa')
                   creditCard.classList.remove('is-mastercard')
                   cardTypeField.src = supportedCards.visa
             }
             else if (cardType === 'is-mastercard') {
                   creditCard.classList.add('is-mastercard')
                   creditCard.classList.remove('is-visa')
                   cardTypeField.src = "https://placehold.it/120x60.png?text=Card";
             }
             return cardType
      };

    const validateCardExpiryDate = () => {
const presentDate = new Date()
const dateField = document.querySelector('[data-cc-info] input:nth-child(2)')
const dateValue = dateField.value
let isValid = expiryDateFormatIsValid(dateField)
if(isValid == true){
     const cardMonth = Number(dateValue.split('/')[0]) - 1
     const cardYear = Number (`20${dateValue.split('/')[1]}`)
     const cardDate = new Date (cardYear, cardMonth)
     isValid = cardDate > presentDate
}
flagIfInvalid(dateField, isValid)
return isValid
     };


const validateCardHolderName = () => {
    const field = document.querySelector('[data-cc-info] input:nth-child(1)')
    const {value} = field
    const isValid = /^[a-zA-Z]{3,30} +[a-zA-Z]{3,30}$/.test(value)
    flagIfInvalid(field, isValid)
    return isValid
}

const validateWithLuhn = (digits) => {
    let value = digits.join('')
    if(/[^0-9-\s]+/.test(value)) return false
    let nCheck = 0, nDigit = 0, bEven = false
    value = value.replace(/\D/g, '')
    for (let n = value.length - 1; n>= 0; n--) {
          const cDigit = value.charAt(n)
          let nDigit = parseInt(cDigit, 10)
          if (bEven) {
                if((nDigit *= 2) > 9)
                nDigit -= 9
          }
          nCheck += nDigit
          bEven = !bEven
    }
    return (nCheck % 10) == 0
}




const validateCardNumber = () => {
    const cardInputs = appState.cardDigits.flat()
    const isValid = validateWithLuhn(cardInputs)
    const creditCardField = document.querySelector('[data-cc-digits]')
    if(isValid) {
          creditCardField.classList.remove('is-invalid')
    } else {
          creditCardField.classList.add('is-invalid')
    }
    return isValid
};
    
    
    
    
     const validatePayment = () => {
           validateCardNumber();
           validateCardHolderName();
           validateCardExpiryDate();
           
     }
          
          const smartCursor = (event, fieldIndex, fields) => {
                console.log(fields[fieldIndex].value.length == fields[fieldIndex].size)
                setTimeout(() => {
                      if(fieldIndex < 3) {
                            if(fields[fieldIndex].value.length == fields[fieldIndex].size)
                            fields[fieldIndex + 1].focus()
                      }
          }, 500)
          }

          const smartInput = (event, fieldIndex, fields) => {
                const e = even.key
                const valdCharacters = e == 'Backspace' || e == 'Tab' || e == 'Shift' || e == 'ArrowUp' || e == 'ArrowDown' || e =='ArrowRight' || e == 'ArrowLeft'
                if(fieldIndex < 4) {
                      if(!isFinite(e) && !validCharacters) {
                            event.preventDefault()
                      }
                      else {
                            const cardInputField = document.querySelector(`[data-cc-digits] input:nth-child(${fieldIndex + 1})`)
                            let cardValue = cardInputField.value
                            document.querySelector('[data-cc-digits] input:nth-child(1)').value.length
                            if(appState.cardDigits[fieldIndex] == undefined && isFinite(e)) {
                                  app.state.cardDigits[fieldIndex] = []
                                  app.state.cardDigits[fieldIndex].push(e)
                                  const digits = appState.cardDigits[0]
                                  detectCardType(digits)
                            }
                            else if (isFinite(e)) {
                                  appState.cardDigits[fieldIndex].push(e)
                            }
                            setTimeout(() => {
                                  if(fieldIndex < 3 && isFinite(e)) {
                                        cardInputField.value = cardInputField.value.substr(0, cardValue.length)
                                        cardInputField.value += '#'
                                  }
                                  if(fieldIndex == 0) {
                                        detectCardType(appState.cardDigits[0])
                                  }
                                  }, 500)
                smartCursor(event, fieldIndex, fields)
                      }
                  }
                      else if (fieldIndex == 4){
if(!valdCharacters && !/^[a-zA-Z]$/.test(e) && event.code != 'Space') {
    event.preventDefault()
}
else {
    smartCursor(event,fieldIndex, fields)
}
                      }
else if (fieldIndex == 5) {
    if(!valdCharacters && !/^[0-9/]$/.test(e)) {
          event.preventDefault()
    }
    else {
          smartCursor(event, fieldIndex, fields)
    }
}
                      }
                
          

     const acceptCardNumbers = (event, fieldIndex) => {};
     }



const enableSmartTyping = () => {
    const cardInputOne = document.querySelector("[data-cc-digits] input:nth-child(1)")
    const cardInputTwo = document.querySelector("[data-cc-digits] input:nth-child(2)")
    const cardInputThree = document.querySelector("data-cc-digits] input:nth-child(3)")
    const cardInputFour = document.querySelector("[data-cc-digits] input:nth-child(4)")
    const nameField = document.querySelector("[data-cc-info] input:nth-chi ld(1)")
    const fields = [cardInputOne, cardInputTwo, cardInputThree, cardInputFour, nameField, dateField]
    fields.forEach((field, index, fields) => {
          field.addEventListener('keydown', (event) => {
        smartInput(event, index, fields)
    })
})
}

    const uiCanInteract = () => {
         const cardInputs = document.querySelector('[data-cc-digits] > input:nth-child(1)');
             cardInputs.focus()

             document.querySelector('[data-pay-btn]').addEventListener('click', validatePayment)
             billHype();
             enableSmartTyping();
      };



    const displayCartTotal = ({results}) => {
            const [data] = results;
            const {itemsInCart, buyerCountry} = data;
            appState.items = itemsInCart;
        appState.country = buyerCountry;
        appState.bill = itemsInCart.reduce((sum, {qty, price})=> sum + (price * qty), 0) 

            appState.billFormatted = formatAsMoney(appState.bill, appState.country)
             document.querySelector("[data-bill]").textContent = appState.billFormatted;
            
            appState.cardDigits = [];
            uiCanInteract();
     document.querySelector('[data-cc-digits] input:nth-child(1)').focus();
       document.querySelector('[data-pay-btn').addEventListener('click', validatePayment);
       billHype();
      }

      const fetchBill = () => {
      const apiHost = 'https://randomapi.com/api';
          const apiKey = '006b08a801d82d0c9824dcfdfdfa3b3c';
          const apiEndpoint = `${apiHost}/${apiKey}`;
          fetch(apiEndpoint).then(response=> response.json()).then(data => displayCartTotal(data)) .catch(error => console.log('Error'));
      
    };
    
    const startApp = () => {
            fetchBill()
    };

    startApp();
      