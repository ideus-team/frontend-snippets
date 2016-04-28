$(function(){
  validateForm();
});

function validateForm(){
  $('.js-validate').validate({
    rules: {
      emailField: {
        email: true
      },
      minlengthField: {
        minlength: 5
      },
      maxlengthField: {
        maxlength: 10
      },
      rangelengthField: {
        rangelength: [5, 10]
      },
      minField: {
        min: 50
      },
      maxField: {
        max: 100
      },
      rangeField: {
        range: [50, 100]
      },
      stepField: {
        step: 10
      },
      dateField: {
        date: true
      },
      dateISOField: {
        dateISO: true
      },
      numberField: {
        number: true
      },
      digitsField: {
        digits: true
      },
      equalTo2Field: {
        equalTo: $('#equalToField')
      },
      remoteField: {
//        remote: "check-email.php"
        remote: {
        url: "check-email.php",
        type: "post",
        data: {
          username: function() {
            return $("#remoteField").val();
          }
        }
      },
      
      minWordsField: {
        minWords: 3
      },
      maxWordsField: {
        maxWords: 5
      },
      rangeWordsField: {
        rangeWords: [3, 5]
      },
      alphanumericField: {
        alphanumeric: true
      },
      bankaccountNLField: {
        bankaccountNL: true
      },
      bankorgiroaccountNLField: {
        bankorgiroaccountNL: true
      },
      giroaccountNLField: {
        giroaccountNL: true
      },
      bicField: {
        bic: true
      },
      cifESField: {
        cifES: true
      },
      cpfBRField: {
        cpfBR: true
      },
      creditcardField: {
        creditcard: true
      },
      creditcardtypesField: {
        creditcardtypes: {
          mastercard: true,
          visa: true
        }
      },
      currencyField: {
        currency: true
      },
      dateITAField: {
        dateITA: true
      },
      extensionField: {
        extension: 'jpg, jpeg, png, gif'
      },
      ibanField: {
        iban: true
      },
      integerField: {
        integer: true
      },
      ipv4Field: {
        ipv4: true
      },
      ipv6Field: {
        ipv6: true
      },
      lettersonlyField: {
        lettersonly: true
      },
      letterswithbasicpuncField: {
        letterswithbasicpunc: true
      },
      mobileUKField: {
        mobileUK: true
      },
      mobileNLField: {
        mobileNL: true
      },
      nieESField: {
        nieES: true
      },
      nifESField: {
        nifES: true
      },
      notEqualToField2: {
        notEqualTo: $('#notEqualToField')
      },
      nowhitespaceField: {
        nowhitespace: true
      },
      patternField: {
        pattern: '^.{1,3}$'
      },
      phoneUSField: {
        phoneUS: true
      },
      phoneUKField: {
        phoneUK: true
      },
      phonesUKField: {
        phonesUK: true
      },
      phoneNLField: {
        phoneNL: true
      },
      postalCodeCAField: {
        postalCodeCA: true
      },
      postalcodeBRField: {
        postalcodeBR: true
      },
      postalcodeITField: {
        postalcodeIT: true
      },
      postalcodeNLField: {
        postalcodeNL: true
      },
      postcodeUKField: {
        postcodeUK: true
      },
      require_from_groupField: {
        require_from_group: [2, '.group']
      },
      skip_or_fill_minimumField: {
        skip_or_fill_minimum: [3, '.group2']
      },
      stateUSField: {
        stateUS: true
      },
      strippedminlengthField: {
        strippedminlength: 5
      },
      timeField: {
        time: true
      },
      time12hField: {
        time12h: true
      },
      url2Field: {
        url2: true
      },
      vinUSField: {
        vinUS: true
      },
      zipcodeUSField: {
        zipcodeUS: true
      },
      ziprangeField: {
        ziprange: true
      }
    }
  });
}