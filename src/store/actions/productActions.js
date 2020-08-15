import {
  FETCH_PRODUCTS,
  SELECT_PRODUCT,
  DE_SELECT_PRODUCT,
  INCREASE_QTY,
  DECREASE_QTY,
} from '../actionTypes';

export const fetchProducts = () => (dispatch) => {
  const data = [
    {
      productId: '5f3159c07f716f061d891aec',
      name: 'மாற்றுத்திறனாளிக்கு நிதி உதவி',
      category: 'காஞ்சிபுரம்',
      price: 3114,
      image: 'https://images.indianexpress.com/2019/02/puducherry-7.jpg',
      qty: 0,
      description:
        'வெள்ளாளகுண்டம் ஊராட்சியில் மாற்றுத்திறனாளிக்கு உதவி செய்து அவருக்கு தொடக்க வேளாண்மை கூட்டுறவு கடன் சங்கம் மூலம் நிதி வழங்க கடை அமைத்து தர ஆலோசனை வழங்கி உத்தரவிட்டார்\r\n',
    },
    {
      productId: '5f3159c0d84e2e979f20a697',
      name: 'ஜிம் திறந்துவைத்து உடற்பயிற்சி ஈடுபட்டார்',
      category: 'சென்னை',
      price: 1676,
      image:
        'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-49439d7l1k0rk095gvr67n1vg1-20190220014924.Medi.jpeg',
      qty: 0,
      description:
        'உடையாப்பட்டி ஊராட்சியில் அர்னால்டு ஜிம் உடற்பயிற்சி நிலையத்தை தெற்கு ஒன்றிய கழக செயலாளர் அருமை அண்ணா மெடிக்கல் ராஜா என்கிற ராஜசேகரன் அவர் பொற்கரங்களால் திறந்துவைத்து உடற்பயிற்சி ஈடுபட்டார். \r\n',
    },
    {
      productId: '5f3159c02516bf201d708ff0',
      name: 'மொத்தம் 80.14 லட்சம் மதிப்பீட்டில் தார்சாலை அமைக்க நிதி ஒதுக்கீடு',
      category: 'சென்னை',
      price: 2369,
      image:
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/MODI14092540.JPG',
      qty: 0,
      description:
        'மாண்புமிகு புரட்சித்தலைவி இதயதெய்வம் அம்மா அவர்களின் அருள் ஆசியுடன் தமிழக முதல்வர் குடிமராமத்து நாயகன் மண்ணின் மைந்தர் எடப்பாடி கே பழனிச்சாமி அவர்களின் ஆணைக்கிணங்க மாநில மத்திய கூட்டுறவு வங்கியின் தலைவர் அருமை அண்ணார் ஆர் இளங்கோவன் அவர்களின் ஆலோசனைப்படி. ஏற்காடு சட்டமன்ற உறுப்பினர் G.சித்ரா அவர்களின் பரிந்துரையின்படியும் அயோத்தியபட்டினம் தெற்கு ஒன்றிய கழக செயலாளர் சேலம் மாவட்ட  கூட்டுறவு வங்கி தலைவர் ஆற்றல்மிகு அண்ணார் உயர்திரு மெடிக்கல்ராஜா என்கிற ராஜசேகரன் அவர்களின் வழிகாட்டுதலின்படி  \r\n',
    },
    {
      productId: '5f3159c071dd800b7826db79',
      name:
        'தமிழக முதல்வர் எடப்பாடி K . பழனிச்சாமி அவர்கள் உத்திரவுபடி சின்னகவுண்டாபுரம் ஊராட்சியில் திட்டபணிகள் 2019-2020',
      category: 'பாண்டிச்சேரி',
      price: 3189,
      image:
        'https://images.moneycontrol.com/static-mcnews/2017/11/PTI11_23_2017_000200B-1-770x433.jpg',
      qty: 0,
      description:
        'மாண்புமிகு தமிழ்நாடு முதல்வர்🌱 எடப்பாடி கே.பழனிசாமி 🌱அவர்களின் ஆணைக்கிணங்க தமிழ்நாடு மாநில கூட்டுறவு வங்கி தலைவர் 🌱 ஆர்.இளங்கோவன் 🌱அவர்களின் ஆலோசனைப்படி  சேலம் மாவட்ட கூட்டுறவு ஒன்றிய தலைவர் மற்றும் அயோத்தியாபட்டினம் தெற்கு ஒன்றிய செயலாளர்🌱 மெடிக்கல் ராஜா (எ) அ.ராஜசேகரன் 🌱அவர்கள் ஏற்காடு சட்ட மன்ற தொகுதி🌱 MLA கு .சித்ரா 🌱அவர்கள் ஆணைப்படி ஒன்றியக்குழு உறுப்பினர்  R.சந்திரகலா மெடிக்கல் ராஜா அவர்களால்  பூமி பூஜை போடப்பட்டு உடன் பொதுமக்கள் மற்றும் கழக  நிர்வாகிகள் இருந்தனர்.\r\n',
    },
    {
      productId: '5f3159c09250c0f4de1b26f0',
      name: 'சின்னகவுண்டாபுரம் ஊராட்சியை தேர்வு செய்தமைக்கு நன்றி !',
      category: 'சென்னை',
      price: 3076,
      image:
        'https://nadunilai.com/wp-content/uploads/2020/06/IMG-20200608-WA0097.jpg',
      qty: 0,
      description:
        'ஜல் ஜீவன் மிஷின் திட்டத்தில் 1.50 கோடி மதிப்பீட்டில் அனைத்து வீடுகளுக்கும் குடிநீர் வழங்கும் திட்டம்  இந்த திட்டத்தை சின்னகவுண்டாபுரம் ஊராட்சியில் தேர்வு செய்து உத்தரவிட்ட மாண்புமிகு தமிழ்நாடு முதலமைச்சர் எடப்பாடி K .பழனிச்சாமி அவர்கள் பரிந்துரைத்தப்படி  மத்திய மாநில கூட்டுறவு சங்க தலைவர் R  .இளங்கோவன்  அவர்கள், ஏற்காடு தொகுதி சட்டமன்ற  உறுப்பினர்  G .சித்ரா அவர்கள் மற்றும்  சேலம் மாவட்ட கூட்டுறவு சங்க தலைவர் மெடிக்கல் ராஜா ( எ ) A ராஜாசேகரன் அவர்களுக்கு நெஞ்சார்ந்த நன்றி ! நன்றி ! நன்றி ! \r\n',
    },
    {
      productId: '5f3159c0177da0b444aaf826',
      name:
        '300க்கு மேற்பட்டவர்களுக்கு   குடிசைமாற்றுவரியாதில் வீடு கட்ட பயனாளிகளுக்கு உத்திரவு ஆணை  வழங்கப்பட்டது',
      category: 'கோயம்புத்தூர்',
      price: 2482,
      image:
        'https://www.thehindu.com/news/national/tamil-nadu/tjigwu/article29784630.ece/ALTERNATES/LANDSCAPE_1200/AIADMK2jpg',
      qty: 0,
      description:
        'இதய தெய்வம் புரட்சிதலைவி அம்மா அருளாசியுடன் மாண்புமிகு தமிழ்நாடு முதல்வர் எடப்பாடி பழனிச்சாமி அவர்களின் உத்தரவின்படி மத்திய மாநில  கூட்டுறவு வங்கி-மாவட்ட அம்மா பேரவை செயலாளர் இளங்கோவன் அவர்கள் ஏற்காடு சட்டமன்ற உறுப்பினர் கு.சித்ரா அவர்கள் சேலம் மாவட்ட கூட்டுறவு ஒன்றிய தலைவர்  - தெற்கு ஒன்றிய கழக செயலாளர் மெடிக்கல் ராஜா (எ) A . ராஜசேகரன் அவர்கள்  ஒன்றிய குழு உறுப்பினர் R . சந்திரகலா மெடிக்கல் ராஜா \r\n',
    },
    {
      productId: '5f3159c0177da0b444aaf826',
      name:
        'பெரியகவுண்டபுரம் ஊராட்சியில் பகுதியில் புதியதாக  பால் கூட்டுறவு சங்க கட்டிட பூமி பூஜை',
      category: 'கோயம்புத்தூர்',
      price: 2482,
      image:
        'https://images.dinamani.com/uploads/user/imagelibrary/2019/12/25/w600X390/odc_admk_news_photo_24_12_2019_2412chn_76_2.jpg',
      qty: 0,
      description:
        'மாண்புமிகு இதய தெய்வம் தங்கதாரகை 🌱டாக்டர் புரட்சித்தலைவி அம்மா🌱 அவர்களின் அருளாசியோடு மண்ணின் மைந்தர் தமிழகத்தின் நிரந்தர முதல்வர் மக்கள் தலைவர் மாண்புமிகு  🌱டாக்டர்.எடப்பாடியார்🌱* அவர்களின் ஆணைக்கிணங்க மாவட்ட புரட்சித்தலைவி அம்மா பேரவை செயலாளரும் தமிழ்நாடு மாநில கூட்டுறவு வங்கி தலைவர் அண்ணன் 🌱திரு.R.இளங்கோவன் 🌱அவர்களின் ஆலோசனைபடி  அயோத்தியாபட்டிணம் தெற்கு ஒன்றிய கழக செயலாளரும் சேலம் மாவட்ட கூட்டுறவு ஒன்றிய தலைவருமான அண்ணன் 🌱🌹திரு.மெடிக்கல் ராஜா (எ) A.ராஜசேகரன் B.sc🌹🌱* அவர்கள்  பெரியகவுண்டபுரம் ஊராட்சியில் \r\n',
    },
  ];
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const selectProduct = (product) => (dispatch) => {
  dispatch({type: SELECT_PRODUCT, payload: product});
};
export const deSelectProduct = (product) => (dispatch) => {
  dispatch({type: DE_SELECT_PRODUCT, payload: product});
};
export const increamentProductQty = (product) => (dispatch) => {
  dispatch({type: INCREASE_QTY, payload: product});
};
export const decreamentProductQty = (product) => (dispatch) => {
  dispatch({type: DECREASE_QTY, payload: product});
};
export const removeProduct = (product) => (dispatch) => {
  dispatch({type: 'REMOVE_PRODUCT', payload: product});
};
