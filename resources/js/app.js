import { easepick, RangePlugin } from '@easepick/bundle';
import intlTelInput from 'intl-tel-input';

if(document.getElementById('datepicker')){
    const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
            'css/app.css'
        ],
        plugins: [RangePlugin],
        RangePlugin: {
            tooltipNumber(num) {
                return num - 1;
            },
            delimiter: "_",
        }
    });
}


if(document.getElementById('phone')){


    const input = document.getElementById('phone');
    intlTelInput(input, {
        // any initialisation options go here
        separateDialCode : false
    });
}

