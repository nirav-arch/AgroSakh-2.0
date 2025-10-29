// AgroSakha Application Data and Logic
const APP_DATA = {
  villages: [
    { name: 'Harda Khas', lat: 22.344, lon: 77.095, population: 74268, crops: ['Wheat', 'Soybean', 'Cotton', 'Gram'] },
    { name: 'Hardakhurd', lat: 22.350, lon: 77.080, population: 4823, crops: ['Wheat', 'Soybean', 'Mustard'] },
    { name: 'Gahal', lat: 22.380, lon: 77.110, population: 3118, crops: ['Cotton', 'Soybean', 'Gram'] },
    { name: 'Magardha', lat: 22.290, lon: 77.120, population: 3396, crops: ['Wheat', 'Gram', 'Mustard'] },
    { name: 'Balagaon', lat: 22.330, lon: 77.050, population: 2731, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Abagaon Khurd', lat: 22.360, lon: 77.100, population: 2604, crops: ['Wheat', 'Gram', 'Mustard'] },
    { name: 'Ranhai Kalan', lat: 22.355, lon: 77.090, population: 2515, crops: ['Soybean', 'Wheat', 'Cotton'] },
    { name: 'Kamtada', lat: 22.320, lon: 77.085, population: 2236, crops: ['Cotton', 'Soybean', 'Gram'] },
    { name: 'Rolgaon', lat: 22.280, lon: 77.070, population: 2205, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Jhadpa', lat: 22.350, lon: 77.105, population: 2132, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Khirkiya', lat: 22.325, lon: 77.065, population: 2100, crops: ['Cotton', 'Wheat', 'Soybean'] },
    { name: 'Timarni', lat: 22.315, lon: 77.095, population: 1980, crops: ['Wheat', 'Gram', 'Mustard'] },
    { name: 'Sirali', lat: 22.370, lon: 77.075, population: 1850, crops: ['Soybean', 'Cotton', 'Maize'] },
    { name: 'Rehtakhedi', lat: 22.365, lon: 77.120, population: 1750, crops: ['Wheat', 'Soybean', 'Gram'] },
    { name: 'Handiya', lat: 22.285, lon: 77.090, population: 1680, crops: ['Cotton', 'Pigeon Pea', 'Soybean'] },
    { name: 'Satwas', lat: 22.340, lon: 77.110, population: 1620, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Chainpur', lat: 22.295, lon: 77.075, population: 1580, crops: ['Soybean', 'Wheat', 'Cotton'] },
    { name: 'Sukhras', lat: 22.310, lon: 77.100, population: 1520, crops: ['Cotton', 'Gram', 'Mustard'] },
    { name: 'Khedi Kala', lat: 22.375, lon: 77.085, population: 1480, crops: ['Wheat', 'Soybean', 'Maize'] },
    { name: 'Ratanpur', lat: 22.335, lon: 77.070, population: 1450, crops: ['Soybean', 'Cotton', 'Pigeon Pea'] },
    { name: 'Ranipur', lat: 22.300, lon: 77.105, population: 1410, crops: ['Wheat', 'Gram', 'Mustard'] },
    { name: 'Piplia', lat: 22.355, lon: 77.115, population: 1380, crops: ['Cotton', 'Soybean', 'Wheat'] },
    { name: 'Budni', lat: 22.320, lon: 77.125, population: 1350, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Kesli', lat: 22.270, lon: 77.080, population: 1320, crops: ['Soybean', 'Cotton', 'Maize'] },
    { name: 'Bangaon', lat: 22.385, lon: 77.095, population: 1290, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Dhamnod', lat: 22.275, lon: 77.095, population: 1260, crops: ['Cotton', 'Pigeon Pea', 'Wheat'] },
    { name: 'Borkhedi', lat: 22.345, lon: 77.055, population: 1230, crops: ['Soybean', 'Wheat', 'Mustard'] },
    { name: 'Kalyanpur', lat: 22.305, lon: 77.115, population: 1200, crops: ['Wheat', 'Cotton', 'Gram'] },
    { name: 'Bhadwel', lat: 22.360, lon: 77.065, population: 1170, crops: ['Soybean', 'Maize', 'Cotton'] },
    { name: 'Mohgaon', lat: 22.290, lon: 77.110, population: 1140, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Amla', lat: 22.315, lon: 77.085, population: 1110, crops: ['Cotton', 'Soybean', 'Pigeon Pea'] },
    { name: 'Khamariya', lat: 22.380, lon: 77.100, population: 1080, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Sultanpur', lat: 22.325, lon: 77.075, population: 1050, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Gorakhpur', lat: 22.295, lon: 77.085, population: 1020, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Madhogarh', lat: 22.370, lon: 77.090, population: 990, crops: ['Cotton', 'Soybean', 'Maize'] },
    { name: 'Chhapariya', lat: 22.285, lon: 77.100, population: 960, crops: ['Wheat', 'Gram', 'Pigeon Pea'] },
    { name: 'Nandanwara', lat: 22.340, lon: 77.120, population: 930, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Dhanora', lat: 22.300, lon: 77.070, population: 900, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Sejwani', lat: 22.365, lon: 77.105, population: 870, crops: ['Cotton', 'Soybean', 'Maize'] },
    { name: 'Bakhatpur', lat: 22.310, lon: 77.090, population: 840, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Semria', lat: 22.275, lon: 77.085, population: 810, crops: ['Soybean', 'Cotton', 'Pigeon Pea'] },
    { name: 'Palasiya', lat: 22.355, lon: 77.070, population: 780, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Jamuniya', lat: 22.320, lon: 77.110, population: 750, crops: ['Cotton', 'Soybean', 'Wheat'] },
    { name: 'Dabri', lat: 22.290, lon: 77.065, population: 720, crops: ['Wheat', 'Gram', 'Maize'] },
    { name: 'Lasudiya', lat: 22.375, lon: 77.115, population: 690, crops: ['Soybean', 'Cotton', 'Pigeon Pea'] },
    { name: 'Bhilkheda', lat: 22.305, lon: 77.080, population: 660, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Chandpur', lat: 22.335, lon: 77.095, population: 630, crops: ['Cotton', 'Soybean', 'Wheat'] },
    { name: 'Devgarh', lat: 22.270, lon: 77.075, population: 600, crops: ['Wheat', 'Gram', 'Maize'] },
    { name: 'Ekalpur', lat: 22.360, lon: 77.125, population: 570, crops: ['Soybean', 'Cotton', 'Pigeon Pea'] },
    { name: 'Fatepur', lat: 22.315, lon: 77.070, population: 540, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Gangapur', lat: 22.280, lon: 77.090, population: 510, crops: ['Cotton', 'Soybean', 'Wheat'] },
    { name: 'Hirapur', lat: 22.345, lon: 77.080, population: 480, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Ichhapur', lat: 22.295, lon: 77.115, population: 450, crops: ['Soybean', 'Cotton', 'Maize'] },
    { name: 'Jaitpur', lat: 22.370, lon: 77.070, population: 420, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Kachnara', lat: 22.325, lon: 77.105, population: 390, crops: ['Cotton', 'Soybean', 'Pigeon Pea'] },
    { name: 'Lakhanpur', lat: 22.285, lon: 77.120, population: 360, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Manpur', lat: 22.350, lon: 77.060, population: 330, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Nayapura', lat: 22.305, lon: 77.095, population: 300, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Odanpur', lat: 22.275, lon: 77.105, population: 270, crops: ['Cotton', 'Soybean', 'Maize'] },
    { name: 'Pachmarhi', lat: 22.340, lon: 77.075, population: 240, crops: ['Wheat', 'Gram', 'Pigeon Pea'] },
    { name: 'Rahuli', lat: 22.365, lon: 77.110, population: 210, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Salaiya', lat: 22.290, lon: 77.080, population: 180, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Tarapur', lat: 22.315, lon: 77.120, population: 150, crops: ['Cotton', 'Soybean', 'Maize'] },
    { name: 'Umaria', lat: 22.380, lon: 77.085, population: 120, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Varkheda', lat: 22.330, lon: 77.065, population: 90, crops: ['Soybean', 'Cotton', 'Pigeon Pea'] },
    { name: 'Wazirpur', lat: 22.295, lon: 77.100, population: 75, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Amarpur', lat: 22.270, lon: 77.115, population: 60, crops: ['Cotton', 'Soybean', 'Wheat'] },
    { name: 'Bahadurpur', lat: 22.355, lon: 77.095, population: 50, crops: ['Wheat', 'Gram', 'Maize'] },
    { name: 'Chitrasani', lat: 22.310, lon: 77.075, population: 45, crops: ['Soybean', 'Cotton', 'Pigeon Pea'] },
    { name: 'Dharampur', lat: 22.375, lon: 77.120, population: 40, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Ganeshpur', lat: 22.285, lon: 77.070, population: 35, crops: ['Cotton', 'Soybean', 'Wheat'] },
    { name: 'Haripur', lat: 22.345, lon: 77.105, population: 30, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Indrapur', lat: 22.300, lon: 77.090, population: 25, crops: ['Soybean', 'Cotton', 'Maize'] },
    { name: 'Jivrajpur', lat: 22.360, lon: 77.080, population: 20, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Kailashpur', lat: 22.320, lon: 77.115, population: 18, crops: ['Cotton', 'Soybean', 'Pigeon Pea'] },
    { name: 'Laxmipur', lat: 22.280, lon: 77.095, population: 15, crops: ['Wheat', 'Gram', 'Soybean'] },
    { name: 'Maheshpur', lat: 22.335, lon: 77.085, population: 12, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Narsinghpur', lat: 22.370, lon: 77.100, population: 10, crops: ['Wheat', 'Mustard', 'Gram'] },
    { name: 'Omkareshwar', lat: 22.290, lon: 77.125, population: 8, crops: ['Cotton', 'Soybean', 'Maize'] },
    { name: 'Parashuram', lat: 22.325, lon: 77.060, population: 6, crops: ['Wheat', 'Gram', 'Pigeon Pea'] },
    { name: 'Raghunathpur', lat: 22.305, lon: 77.110, population: 5, crops: ['Soybean', 'Cotton', 'Wheat'] },
    { name: 'Shivpur', lat: 22.350, lon: 77.075, population: 4, crops: ['Wheat', 'Mustard', 'Gram'] }
  ],
  
  weatherForecast: [
    { day: 'Today', maxTemp: 32, minTemp: 18, condition: 'Clear Sky', condition_hi: 'साफ आकाश', rain: 5, icon: '☀️' },
    { day: 'Tomorrow', maxTemp: 33, minTemp: 19, condition: 'Sunny', condition_hi: 'धूप', rain: 0, icon: '☀️' },
    { day: 'Day 3', maxTemp: 31, minTemp: 17, condition: 'Partly Cloudy', condition_hi: 'आंशिक बादल', rain: 10, icon: '⛅' },
    { day: 'Day 4', maxTemp: 30, minTemp: 16, condition: 'Cloudy', condition_hi: 'बादल', rain: 20, icon: '☁️' },
    { day: 'Day 5', maxTemp: 29, minTemp: 16, condition: 'Light Rain', condition_hi: 'हल्की बारिश', rain: 40, icon: '🌧️' },
    { day: 'Day 6', maxTemp: 28, minTemp: 15, condition: 'Rain', condition_hi: 'बारिश', rain: 60, icon: '🌧️' },
    { day: 'Day 7', maxTemp: 30, minTemp: 17, condition: 'Partly Cloudy', condition_hi: 'आंशिक बादल', rain: 15, icon: '⛅' }
  ],
  
  notifications: [
    {
      id: 1,
      type: 'weather',
      priority: 'high',
      time: '25 Oct 2025, 7:30 AM',
      message_en: 'Good sowing window for wheat! Temperature ideal (28-32°C) for next 5 days.',
      message_hi: 'गेहूं बुवाई के लिए अच्छा समय! अगले 5 दिन तापमान आदर्श (28-32°C)।'
    },
    {
      id: 2,
      type: 'pest',
      priority: 'high',
      time: '24 Oct 2025, 6:00 PM',
      message_en: 'ALERT: Pink bollworm detected in 3 villages. Use pheromone traps immediately.',
      message_hi: 'चेतावनी: 3 गांवों में गुलाबी सुंडी पकड़ी। फेरोमोन ट्रैप तुरंत लगाएं।'
    },
    {
      id: 3,
      type: 'market',
      priority: 'medium',
      time: '25 Oct 2025, 2:00 PM',
      message_en: 'Cotton prices up ₹200/quintal! Current rate: ₹6,700. Good selling opportunity.',
      message_hi: 'कपास का भाव ₹200/क्विंटल बढ़ा! वर्तमान दर: ₹6,700। बेचने का अच्छा मौका।'
    },
    {
      id: 4,
      type: 'scheme',
      priority: 'high',
      time: '25 Oct 2025, 10:00 AM',
      message_en: 'PM-KISAN 18th installment releasing 31st Oct. ₹2000 direct to bank.',
      message_hi: 'PM-KISAN 18वीं किस्त 31 अक्टूबर को। ₹2000 सीधे बैंक में।'
    }
  ],
  
  diseases: {
    wheat: {
      name: 'Wheat Leaf Rust',
      name_hindi: 'गेहूं का पत्ती रतुआ',
      confidence: 97,
      severity: 'Moderate',
      treatment_en: 'Apply Propiconazole 25% EC @ 500ml/hectare. Spray at early infection stage. Repeat after 15 days if needed.',
      treatment_hi: 'प्रोपिकोनाज़ोल 25% EC @ 500ml/हेक्टेयर लगाएं। संक्रमण के शुरुआती चरण में छिड़काव करें। 15 दिन बाद दोहराएं।',
      cost: '₹450-600/acre'
    },
    soybean: {
      name: 'Soybean Yellow Mosaic Virus',
      name_hindi: 'सोयाबीन पीला मोजेक वायरस',
      confidence: 96,
      severity: 'High',
      treatment_en: 'Remove infected plants. Control whitefly vector with Imidacloprid 17.8% SL @ 100ml/acre. Use resistant varieties.',
      treatment_hi: 'संक्रमित पौधे हटाएं। Imidacloprid 17.8% SL @ 100ml/एकड़ से सफेद मक्खी नियंत्रित करें। प्रतिरोधी किस्में उपयोग करें।',
      cost: '₹350-500/acre'
    },
    cotton: {
      name: 'Cotton Pink Bollworm',
      name_hindi: 'कपास गुलाबी सुंडी',
      confidence: 98,
      severity: 'High',
      treatment_en: 'Use pheromone traps. Spray Emamectin Benzoate 5% SG @ 200g/acre or Bt formulation. Remove infected bolls.',
      treatment_hi: 'फेरोमोन ट्रैप लगाएं। Emamectin Benzoate 5% SG @ 200g/एकड़ या Bt का छिड़काव करें। संक्रमित फलियां हटाएं।',
      cost: '₹700-900/acre'
    },
    gram: {
      name: 'Gram Wilt Disease',
      name_hindi: 'चना उकठा रोग',
      confidence: 95,
      severity: 'Moderate',
      treatment_en: 'Seed treatment with Trichoderma viride @ 10g/kg. Avoid waterlogging. Use wilt-resistant varieties like JG-11, JG-130.',
      treatment_hi: 'Trichoderma viride @ 10g/kg से बीज उपचार करें। जल भराव से बचें। JG-11, JG-130 जैसी प्रतिरोधी किस्में उपयोग करें।',
      cost: '₹400-500/acre'
    },
    mustard: {
      name: 'Mustard Alternaria Blight',
      name_hindi: 'सरसों का अल्टरनेरिया ब्लाइट',
      confidence: 96,
      severity: 'Moderate',
      treatment_en: 'Spray Mancozeb 75% WP @ 2g/liter water. Apply at 50% flowering and repeat after 15 days.',
      treatment_hi: 'Mancozeb 75% WP @ 2g/लीटर पानी का छिड़काव करें। 50% फूल आने पर लगाएं और 15 दिन बाद दोहराएं।',
      cost: '₹350-450/acre'
    },
    maize: {
      name: 'Maize Leaf Blight',
      name_hindi: 'मक्का पत्ती झुलसा',
      confidence: 94,
      severity: 'Moderate',
      treatment_en: 'Spray Carbendazim 50% WP @ 1g/liter or Mancozeb @ 2.5g/liter. Remove infected leaves.',
      treatment_hi: 'Carbendazim 50% WP @ 1g/लीटर या Mancozeb @ 2.5g/लीटर का छिड़काव करें। संक्रमित पत्तियां हटाएं।',
      cost: '₹300-400/acre'
    },
    'pigeon pea': {
      name: 'Pigeon Pea Wilt',
      name_hindi: 'अरहर उकठा रोग',
      confidence: 93,
      severity: 'High',
      treatment_en: 'Use Trichoderma-treated seeds. Deep summer plowing. Crop rotation with non-host crops.',
      treatment_hi: 'Trichoderma उपचारित बीज उपयोग करें। गहरी गर्मी जुताई करें। गैर-मेजबान फसलों के साथ फसल चक्र।',
      cost: '₹400-550/acre'
    }
  },
  
  marketPrices: [
    { commodity: 'Wheat', commodity_hindi: 'गेहूं', price: 2250, yesterday: 2200, change: +2.3 },
    { commodity: 'Soybean', commodity_hindi: 'सोयाबीन', price: 4800, yesterday: 4920, change: -2.4 },
    { commodity: 'Cotton', commodity_hindi: 'कपास', price: 6700, yesterday: 6500, change: +3.1 },
    { commodity: 'Gram', commodity_hindi: 'चना', price: 5400, yesterday: 5250, change: +2.9 },
    { commodity: 'Mustard', commodity_hindi: 'सरसों', price: 5100, yesterday: 5180, change: -1.5 },
    { commodity: 'Maize', commodity_hindi: 'मक्का', price: 1900, yesterday: 1900, change: 0 },
    { commodity: 'Pigeon Pea', commodity_hindi: 'अरहर', price: 6200, yesterday: 6100, change: +1.6 }
  ],
  
  schemes: [
    {
      name: 'PM-KISAN',
      name_hindi: 'पीएम-किसान',
      benefit_en: '₹6,000 per year direct benefit transfer in 3 installments',
      benefit_hi: '₹6,000 प्रति वर्ष 3 किस्तों में सीधे बैंक में',
      eligibility_en: 'All landholding farmers',
      eligibility_hi: 'सभी भूभाग वाले किसान',
      icon: '💰',
      status: 'not-applied'
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      name_hindi: 'प्रधानमंत्री फसल बीमा योजना',
      benefit_en: 'Comprehensive crop insurance - 2% premium for Kharif, 1.5% for Rabi',
      benefit_hi: 'व्यापक फसल बीमा - खरीफ 2%, रबी 1.5% प्रीमियम',
      eligibility_en: 'All farmers with notified crops',
      eligibility_hi: 'अधिसूचित फसलों वाले सभी किसान',
      icon: '🌾',
      status: 'not-applied'
    },
    {
      name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
      name_hindi: 'परंपरागत कृषि विकास योजना',
      benefit_en: '₹50,000 per hectare for 3 years - Organic farming support',
      benefit_hi: '₹50,000 प्रति हेक्टेयर 3 वर्ष तक - जैविक खेती सहायता',
      eligibility_en: 'Farmers adopting organic farming in clusters',
      eligibility_hi: 'समूह में जैविक खेती अपनाने वाले किसान',
      icon: '🌱',
      status: 'not-applied'
    },
    {
      name: 'Soil Health Card Scheme',
      name_hindi: 'मृदा स्वास्थ्य कार्ड योजना',
      benefit_en: 'Free soil testing and customized fertilizer recommendations',
      benefit_hi: 'मुफ्त मिट्टी जांच और अनुकूलित उर्वरक सलाह',
      eligibility_en: 'All farmers - Cards issued every 2 years',
      eligibility_hi: 'सभी किसान - हर 2 साल में कार्ड',
      icon: '🧪',
      status: 'not-applied'
    },
    {
      name: 'Kisan Credit Card (KCC)',
      name_hindi: 'किसान क्रेडिट कार्ड',
      benefit_en: 'Short-term credit at 4% interest rate for agricultural needs',
      benefit_hi: 'कृषि जरूरतों के लिए 4% ब्याज दर पर अल्पकालिक कर्ज',
      eligibility_en: 'Farmers with land records and bank account',
      eligibility_hi: 'भूमि रिकॉर्ड और बैंक खाता वाले किसान',
      icon: '💳',
      status: 'not-applied'
    },
    {
      name: 'MP Mukhyamantri Kisan Kalyan Yojana',
      name_hindi: 'एमपी मुख्यमंत्री किसान कल्याण योजना',
      benefit_en: '₹4,000 per year additional to PM-KISAN (MP state scheme)',
      benefit_hi: '₹4,000 प्रति वर्ष PM-KISAN के अतिरिक्त (एमपी राज्य योजना)',
      eligibility_en: 'MP farmers already enrolled in PM-KISAN',
      eligibility_hi: 'PM-KISAN में पंजीकृत एमपी किसान',
      icon: '🌼',
      status: 'not-applied'
    },
    {
      name: 'National Agriculture Market (e-NAM)',
      name_hindi: 'राष्ट्रीय कृषि बाजार (e-NAM)',
      benefit_en: 'Online trading platform for better crop prices',
      benefit_hi: 'बेहतर फसल कीमतों के लिए ऑनलाइन व्यापार मंच',
      eligibility_en: 'All farmers can register online',
      eligibility_hi: 'सभी किसान ऑनलाइन पंजीकरण कर सकते हैं',
      icon: '📱',
      status: 'not-applied'
    },
    {
      name: 'Pradhan Mantri Krishi Sinchai Yojana',
      name_hindi: 'प्रधानमंत्री कृषि सिंचाई योजना',
      benefit_en: 'Subsidy for drip/sprinkler irrigation - Up to 55% for SC/ST',
      benefit_hi: 'टपक / छिड़काव सिंचाई पर सब्सिडी - SC/ST के लिए 55% तक',
      eligibility_en: 'Farmers with irrigation facilities',
      eligibility_hi: 'सिंचाई सुविधा वाले किसान',
      icon: '💧',
      status: 'not-applied'
    },
    {
      name: 'MP Bhavantar Bhugtan Yojana',
      name_hindi: 'एमपी भावांतर भुगतान योजना',
      benefit_en: 'Price deficiency compensation for selected crops',
      benefit_hi: 'चयनित फसलों के लिए मूल्य कमी मुआवजा',
      eligibility_en: 'MP farmers growing notified crops',
      eligibility_hi: 'अधिसूचित फसलें उगाने वाले एमपी किसान',
      icon: '📊',
      status: 'not-applied'
    },
    {
      name: 'Kisan Sampada Yojana',
      name_hindi: 'किसान संपदा योजना',
      benefit_en: 'Support for food processing and value addition',
      benefit_hi: 'खाद्य प्रसंस्करण और मूल्य वर्धन के लिए सहायता',
      eligibility_en: 'Farmer producer organizations (FPOs)',
      eligibility_hi: 'किसान उत्पादक संगठन (FPO)',
      icon: '🏭',
      status: 'not-applied'
    }
  ],
  
  communityPosts: [
    {
      id: 1,
      author: 'Ramesh Patel',
      village: 'Harda Khas',
      time: '2 hours ago',
      content_en: 'Best time to sow wheat in Harda? Mid-November or wait till December?',
      content_hi: 'हरदा में गेहूं बोने का सबसे अच्छा समय? नवंबर मध्य या दिसंबर तक प्रतीक्षा करें?',
      replies: 7,
      likes: 12
    },
    {
      id: 2,
      author: 'Sunita Devi',
      village: 'Gahal',
      time: '4 hours ago',
      content_en: 'PlantNet AI detected soybean rust in my field. Treatment worked perfectly! 97% accurate!',
      content_hi: 'PlantNet AI ने मेरे खेत में सोयाबीन रतुआ पकड़ा! उपचार बिल्कुल सही रहा! 97% सटीक!',
      replies: 15,
      likes: 24
    },
    {
      id: 3,
      author: 'Mohan Singh',
      village: 'Magardha',
      time: '8 hours ago',
      content_en: 'Cotton prices up by ₹200/quintal! Good time to sell at Harda mandi.',
      content_hi: 'कपास का भाव ₹200/क्विंटल बढ़ा! हरदा मंडी में बेचने का अच्छा समय।',
      replies: 9,
      likes: 18
    },
    {
      id: 4,
      author: 'Kavita Sharma',
      village: 'Balagaon',
      time: '1 day ago',
      content_en: 'Received ₹2000 PM-KISAN + ₹1000 CM Kisan Kalyan today. Total ₹3000!',
      content_hi: 'आज ₹2000 PM-KISAN + ₹1000 सीएम किसान कल्याण मिले। कुल ₹3000!',
      replies: 11,
      likes: 22
    },
    {
      id: 5,
      author: 'Rajesh Kumar',
      village: 'Ranhai Kalan',
      time: '1 day ago',
      content_en: 'Mustard crop doing well this year. Used AgroSakha soil health recommendations.',
      content_hi: 'इस साल सरसों की फसल अच्छी हो रही। AgroSakha मृदा स्वास्थ्य सलाह उपयोग की।',
      replies: 6,
      likes: 14
    },
    {
      id: 6,
      author: 'Prakash Yadav',
      village: 'Kamtada',
      time: '1 day ago',
      content_en: 'Heavy rain expected this week. Should I delay gram sowing?',
      content_hi: 'इस हफ्ते भारी बारिश की उम्मीद। क्या चने की बुवाई टालूं?',
      replies: 8,
      likes: 10
    },
    {
      id: 7,
      author: 'Anita Verma',
      village: 'Rolgaon',
      time: '2 days ago',
      content_en: 'Started organic farming with PKVY scheme. ₹50,000 subsidy received!',
      content_hi: 'PKVY योजना से जैविक खेती शुरू की। ₹50,000 सब्सिडी मिली!',
      replies: 13,
      likes: 26
    },
    {
      id: 8,
      author: 'Vijay Patel',
      village: 'Jhadpa',
      time: '2 days ago',
      content_en: 'Pink bollworm in cotton detected by app. Early action saved my crop!',
      content_hi: 'ऐप से कपास में गुलाबी सुंडी पकड़ी। जल्दी कार्रवाई से फसल बची!',
      replies: 10,
      likes: 19
    },
    {
      id: 9,
      author: 'Deepak Chouhan',
      village: 'Khirkiya',
      time: '2 days ago',
      content_en: 'Anyone using drip irrigation? Want to apply for PMKSY subsidy.',
      content_hi: 'कोई टपक सिंचाई उपयोग कर रहा? PMKSY सब्सिडी के लिए आवेदन करना है।',
      replies: 12,
      likes: 16
    },
    {
      id: 10,
      author: 'Meena Solanki',
      village: 'Timarni',
      time: '3 days ago',
      content_en: 'Soil Health Card arrived. pH is 6.5. What crops are best?',
      content_hi: 'मृदा स्वास्थ्य कार्ड आया। pH 6.5 है। कौन सी फसलें सबसे अच्छी?',
      replies: 14,
      likes: 20
    }
  ],
  
  farmActivities: [
    { date: 'Oct 25', activity_en: 'Disease scan completed - No issues detected', activity_hi: 'रोग स्कैन पूर्ण - कोई समस्या नहीं' },
    { date: 'Oct 24', activity_en: 'NPK fertilizer applied - 2 bags', activity_hi: 'NPK उर्वरक लगाया - 2 बोरा' },
    { date: 'Oct 22', activity_en: 'Irrigation completed - 3 hours', activity_hi: 'सिंचाई पूर्ण - 3 घंटे' },
    { date: 'Oct 20', activity_en: 'Wheat seeds purchased - 50 kg', activity_hi: 'गेहूं बीज खरीदा - 50 किलो' },
    { date: 'Oct 18', activity_en: 'Soil testing done via Soil Health Card', activity_hi: 'मृदा स्वास्थ्य कार्ड से मिट्टी जांच' },
    { date: 'Oct 15', activity_en: 'Field plowing completed', activity_hi: 'खेत जुताई पूर्ण' }
  ]
};

// Application State
const state = {
  currentLanguage: 'en',
  currentView: 'dashboard',
  isLoggedIn: false,
  currentUser: null,
  offlineMode: false,
  users: [] // In-memory user storage
};

// Utility Functions
function showLoading(text) {
  const overlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  if (text) {
    loadingText.querySelector('span').textContent = text;
  }
  overlay.classList.add('active');
}

function hideLoading() {
  document.getElementById('loading-overlay').classList.remove('active');
}

function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function switchLanguage() {
  state.currentLanguage = state.currentLanguage === 'en' ? 'hi' : 'en';
  updateLanguage();
  
  // Update language toggle button
  const langBtn = document.getElementById('lang-toggle-btn');
  if (state.currentLanguage === 'hi') {
    langBtn.innerHTML = '<span class="lang-inactive">EN</span> ↔️ <span class="lang-active">HI</span>';
  } else {
    langBtn.innerHTML = '<span class="lang-active">EN</span> ↔️ <span class="lang-inactive">HI</span>';
  }
  
  showToast(state.currentLanguage === 'hi' ? 'भाषा बदली गई' : 'Language Changed');
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const attr = state.currentLanguage === 'en' ? 'data-en' : 'data-hi';
    const text = el.getAttribute(attr);
    if (text) {
      el.textContent = text;
    }
  });
}

function switchView(viewId) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  
  // Show selected view
  const targetView = document.getElementById(viewId + '-view');
  if (targetView) {
    targetView.classList.add('active');
    state.currentView = viewId;
  }
  
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.view === viewId) {
      item.classList.add('active');
    }
  });
}

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Authentication
function initAuth() {
  // Populate village dropdowns
  const signupVillage = document.getElementById('signup-village');
  const farmVillage = document.getElementById('farm-village');
  
  APP_DATA.villages.forEach(village => {
    const option1 = document.createElement('option');
    option1.value = village.name;
    option1.textContent = village.name;
    signupVillage.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = village.name;
    option2.textContent = village.name;
    farmVillage.appendChild(option2);
  });
  
  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      
      this.classList.add('active');
      const formId = this.dataset.tab + '-form';
      document.getElementById(formId).classList.add('active');
    });
  });
  
  // Login form
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('login-phone').value.trim();
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');
    
    // Validate phone number
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      errorDiv.textContent = state.currentLanguage === 'en' ? 
        'Please enter a valid 10-digit phone number' : 
        'कृपया 10 अंकों का मान्य फोन नंबर दर्ज करें';
      errorDiv.style.display = 'block';
      return;
    }
    
    // Find user in memory
    const user = state.users.find(u => u.phone === phone && u.password === password);
    
    if (user) {
      state.isLoggedIn = true;
      state.currentUser = {
        name: user.name,
        phone: user.phone,
        village: user.village,
        farmSize: user.farmSize
      };
      
      // Current user is now in state.currentUser
      
      document.getElementById('user-name').textContent = state.currentUser.name;
      errorDiv.style.display = 'none';
      switchScreen('app-screen');
      showToast(state.currentLanguage === 'en' ? 'Welcome to AgroSakha!' : 'AgroSakha में आपका स्वागत है!');
      initApp();
    } else {
      errorDiv.textContent = state.currentLanguage === 'en' ? 
        'Invalid phone number or password. Please try again or sign up.' : 
        'अमान्य फोन नंबर या पासवर्ड। कृपया पुनः प्रयास करें या साइन अप करें।';
      errorDiv.style.display = 'block';
    }
  });
  
  // Signup form
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    const village = document.getElementById('signup-village').value;
    const farmSize = document.getElementById('signup-farm-size').value;
    const password = document.getElementById('signup-password').value;
    const errorDiv = document.getElementById('signup-error');
    const successDiv = document.getElementById('signup-success');
    
    // Validate inputs
    if (!name || !phone || !village || !password) {
      errorDiv.textContent = state.currentLanguage === 'en' ? 
        'Please fill all required fields' : 
        'कृपया सभी आवश्यक फ़ील्ड भरें';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      errorDiv.textContent = state.currentLanguage === 'en' ? 
        'Please enter a valid 10-digit phone number' : 
        'कृपया 10 अंकों का मान्य फोन नंबर दर्ज करें';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    if (password.length < 6) {
      errorDiv.textContent = state.currentLanguage === 'en' ? 
        'Password must be at least 6 characters' : 
        'पासवर्ड कम से कम 6 अक्षर का होना चाहिए';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    // Check if phone already exists
    if (state.users.some(u => u.phone === phone)) {
      errorDiv.textContent = state.currentLanguage === 'en' ? 
        'Phone number already registered. Please login.' : 
        'फोन नंबर पहले से पंजीकृत है। कृपया लॉगिन करें।';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    // Create new user
    const newUser = {
      name,
      phone,
      village,
      farmSize: farmSize || '0',
      password,
      createdAt: new Date().toISOString()
    };
    
    // Add to users array in memory
    state.users.push(newUser);
    
    // Show success message
    errorDiv.style.display = 'none';
    successDiv.textContent = state.currentLanguage === 'en' ? 
      'Account created successfully! Please login to continue.' : 
      'खाता सफलतापूर्वक बनाया गया! जारी रखने के लिए कृपया लॉगिन करें।';
    successDiv.style.display = 'block';
    
    // Clear form
    document.getElementById('signup-form').reset();
    
    // Switch to login tab after 2 seconds
    setTimeout(() => {
      document.querySelectorAll('.auth-tab')[0].click();
      successDiv.style.display = 'none';
    }, 2000);
  });
}

// Initialize App Features
function initApp() {
  initNotifications();
  initWeather();
  initDisease();
  initMarket();
  initSchemes();
  initCommunity();
  initFarm();
}

// Notifications
let notifications = [...APP_DATA.notifications];

function initNotifications() {
  const notificationBtn = document.getElementById('notification-btn');
  const notificationPanel = document.getElementById('notification-panel');
  const clearAllBtn = document.getElementById('clear-all-notifications');
  
  notificationBtn.addEventListener('click', () => {
    notificationPanel.classList.toggle('active');
  });
  
  // Clear all notifications
  clearAllBtn.addEventListener('click', () => {
    if (confirm(state.currentLanguage === 'en' ? 
      'Are you sure you want to clear all notifications?' : 
      'क्या आप सभी सूचनाएं साफ़ करना चाहते हैं?')) {
      notifications = [];
      renderNotifications();
      updateNotificationCount();
      showToast(state.currentLanguage === 'en' ? 'All notifications cleared' : 'सभी सूचनाएं साफ़ की गईं');
    }
  });
  
  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!notificationBtn.contains(e.target) && !notificationPanel.contains(e.target)) {
      notificationPanel.classList.remove('active');
    }
  });
  
  renderNotifications();
  updateNotificationCount();
}

function renderNotifications() {
  const notificationsList = document.getElementById('notifications-list');
  
  if (notifications.length === 0) {
    notificationsList.innerHTML = `
      <div class="notifications-empty">
        <div class="notifications-empty-icon">🔔</div>
        <p>${state.currentLanguage === 'en' ? 'No notifications' : 'कोई सूचना नहीं'}</p>
      </div>
    `;
    return;
  }
  
  notificationsList.innerHTML = notifications.map(notif => `
    <div class="notification-item ${notif.type}" data-id="${notif.id}">
      <button class="notification-delete" onclick="deleteNotification(${notif.id})" title="Delete">×</button>
      <span class="notification-type-badge ${notif.type}">${notif.type}</span>
      <div class="notification-time">${notif.time}</div>
      <div class="notification-message">
        ${state.currentLanguage === 'en' ? notif.message_en : notif.message_hi}
      </div>
    </div>
  `).join('');
}

function deleteNotification(id) {
  notifications = notifications.filter(n => n.id !== id);
  renderNotifications();
  updateNotificationCount();
  showToast(state.currentLanguage === 'en' ? 'Notification deleted' : 'सूचना हटाई गई');
}

function updateNotificationCount() {
  const badge = document.getElementById('notification-count');
  const count = notifications.length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
  document.getElementById('alert-count').textContent = count;
}

// Weather Module
function initWeather() {
  const forecastGrid = document.getElementById('forecast-grid');
  const alertsList = document.getElementById('weather-alerts-list');
  
  // Render forecast
  forecastGrid.innerHTML = APP_DATA.weatherForecast.map(day => `
    <div class="forecast-card">
      <div class="forecast-day">${day.day}</div>
      <div class="forecast-icon">${day.icon}</div>
      <div class="forecast-temps">${day.maxTemp}° / ${day.minTemp}°</div>
      <div class="forecast-rain">${day.rain}% rain</div>
    </div>
  `).join('');
  
  // Render weather alerts
  const weatherAlerts = [
    { severity: 'high', message: 'Heavy rainfall warning: 80mm expected in 24 hours' },
    { severity: 'medium', message: 'Good sowing window: Adequate soil moisture detected' }
  ];
  
  alertsList.innerHTML = weatherAlerts.map(alert => `
    <div class="alert-card ${alert.severity}">
      <div class="alert-title">${alert.severity === 'high' ? '⚠️ High Alert' : '⚡ Weather Update'}</div>
      <div class="alert-message">${alert.message}</div>
    </div>
  `).join('');
}

// Disease Detection Module
function initDisease() {
  const uploadArea = document.getElementById('upload-area');
  const uploadBtn = document.getElementById('upload-btn');
  const imageInput = document.getElementById('disease-image');
  const cropType = document.getElementById('crop-type');
  const diseaseResult = document.getElementById('disease-result');
  
  uploadBtn.addEventListener('click', () => imageInput.click());
  uploadArea.addEventListener('click', () => imageInput.click());
  
  imageInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      analyzeDiseaseImage(file, cropType.value);
    }
  });
}

function analyzeDiseaseImage(file, crop) {
  showLoading(state.currentLanguage === 'en' ? 'Analyzing image with AI...' : 'AI के साथ विश्लेषण...');
  
  setTimeout(() => {
    hideLoading();
    
    // Generate detection results for disease, pest, and secondary finding
    const detections = generateDetections(crop);
    
    const resultsContainer = document.getElementById('detection-results');
    resultsContainer.innerHTML = detections.map((detection, index) => `
      <div class="detection-item">
        <span class="detection-type">${detection.type_en} / ${detection.type_hi}</span>
        <h3>${detection.name_en}</h3>
        <p class="hindi-text">${detection.name_hi}</p>
        
        <div class="result-metrics">
          <div class="metric">
            <span class="metric-label">
              <span data-en="Confidence" data-hi="विश्वसनीयता">Confidence</span>
            </span>
            <span class="metric-value">${detection.confidence}%</span>
            <div class="confidence-bar">
              <div class="confidence-fill" style="width: ${detection.confidence}%"></div>
            </div>
          </div>
        </div>
        
        <div class="treatment-section">
          <h4><span data-en="Treatment" data-hi="उपचार">Treatment</span></h4>
          <p>${state.currentLanguage === 'en' ? detection.treatment_en : detection.treatment_hi}</p>
          ${detection.cost ? `
            <div class="treatment-cost">
              <span data-en="Estimated Cost:" data-hi="अनुमानित लागत:">Estimated Cost:</span>
              <strong>${detection.cost}</strong>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
    
    document.getElementById('disease-result').style.display = 'block';
    document.getElementById('disease-result').scrollIntoView({ behavior: 'smooth' });
    
    showToast(state.currentLanguage === 'en' ? 'AI Analysis Complete! 3 detections found' : 'AI विश्लेषण पूर्ण! 3 पहचान मिली');
    updateLanguage();
  }, 2500);
}

function generateDetections(crop) {
  const pestDatabase = {
    wheat: { name: 'Wheat Stem Borer', name_hi: 'गेहूं तना छेदक', treatment: 'Use Chlorpyrifos 20% EC @ 2ml/liter. Apply at tillering stage.', treatment_hi: 'Chlorpyrifos 20% EC @ 2ml/लीटर उपयोग करें। कल्ले निकलने के समय लगाएं।', cost: '₹350-450/acre' },
    soybean: { name: 'Soybean Pod Borer', name_hi: 'सोयाबीन फली छेदक', treatment: 'Spray Quinalphos 25% EC @ 2ml/liter at flowering stage.', treatment_hi: 'फूल आने के समय Quinalphos 25% EC @ 2ml/लीटर छिड़काव करें।', cost: '₹400-500/acre' },
    cotton: { name: 'Cotton Aphids', name_hi: 'कपास माहू', treatment: 'Use Acetamiprid 20% SP @ 100g/acre. Repeat after 10 days if needed.', treatment_hi: 'Acetamiprid 20% SP @ 100g/एकड़ उपयोग करें। जरूरत पर 10 दिन बाद दोहराएं।', cost: '₹300-400/acre' },
    gram: { name: 'Gram Pod Borer', name_hi: 'चना फली छेदक', treatment: 'Apply Emamectin Benzoate @ 200g/acre during pod formation.', treatment_hi: 'फली बनने के समय Emamectin Benzoate @ 200g/एकड़ लगाएं।', cost: '₹500-600/acre' },
    mustard: { name: 'Mustard Aphid', name_hi: 'सरसों माहू', treatment: 'Spray Dimethoate 30% EC @ 1ml/liter at early infestation.', treatment_hi: 'शुरुआती संक्रमण पर Dimethoate 30% EC @ 1ml/लीटर छिड़काव करें।', cost: '₹250-350/acre' },
    maize: { name: 'Fall Armyworm', name_hi: 'फॉल आर्मीवर्म', treatment: 'Use Chlorantraniliprole @ 150ml/acre. Apply at early larval stage.', treatment_hi: 'Chlorantraniliprole @ 150ml/एकड़ उपयोग करें। लार्वा के शुरुआती चरण में लगाएं।', cost: '₹600-700/acre' },
    'pigeon pea': { name: 'Pod Fly', name_hi: 'फली मक्खी', treatment: 'Spray Profenophos @ 2ml/liter during pod formation stage.', treatment_hi: 'फली बनने के समय Profenophos @ 2ml/लीटर छिड़काव करें।', cost: '₹400-500/acre' }
  };
  
  const disease = APP_DATA.diseases[crop];
  const pest = pestDatabase[crop];
  
  const confidences = [94, 87, 82];
  const shuffled = confidences.sort(() => Math.random() - 0.5);
  
  return [
    {
      type_en: 'Disease Detected',
      type_hi: 'रोग पहचाना गया',
      name_en: disease.name,
      name_hi: disease.name_hindi,
      confidence: shuffled[0],
      treatment_en: disease.treatment_en,
      treatment_hi: disease.treatment_hi,
      cost: disease.cost
    },
    {
      type_en: 'Pest Detected',
      type_hi: 'कीट पहचाना गया',
      name_en: pest.name,
      name_hi: pest.name_hi,
      confidence: shuffled[1],
      treatment_en: pest.treatment,
      treatment_hi: pest.treatment_hi,
      cost: pest.cost
    },
    {
      type_en: 'Secondary Finding',
      type_hi: 'द्वितीयक खोज',
      name_en: 'Nutrient Deficiency (Nitrogen)',
      name_hi: 'पोषक तत्व की कमी (नाइट्रोजन)',
      confidence: shuffled[2],
      treatment_en: 'Apply Urea @ 100kg/hectare or organic compost. Conduct soil test for accurate diagnosis.',
      treatment_hi: 'यूरिया @ 100kg/हेक्टेयर या जैविक खाद डालें। सटीक निदान के लिए मिट्टी परीक्षण करें।',
      cost: '₹200-300/acre'
    }
  ];
}

// Market Prices Module
function initMarket() {
  const marketTbody = document.getElementById('market-tbody');
  
  function renderMarketPrices() {
    marketTbody.innerHTML = APP_DATA.marketPrices.map(item => {
      const changeClass = item.change > 0 ? 'positive' : 'negative';
      const changeSymbol = item.change > 0 ? '↑' : '↓';
      const commodity = state.currentLanguage === 'en' ? item.commodity : item.commodity_hindi;
      
      return `
        <tr>
          <td><strong>${commodity}</strong></td>
          <td>₹${item.price}</td>
          <td class="price-change ${changeClass}">${changeSymbol} ${Math.abs(item.change)}%</td>
        </tr>
      `;
    }).join('');
  }
  
  renderMarketPrices();
  
  document.getElementById('mandi-select').addEventListener('change', () => {
    showLoading(state.currentLanguage === 'en' ? 'Fetching prices...' : 'कीमतें लाई जा रही हैं...');
    setTimeout(() => {
      hideLoading();
      renderMarketPrices();
    }, 1000);
  });
}

// Government Schemes Module
function initSchemes() {
  const schemesList = document.getElementById('schemes-list');
  
  schemesList.innerHTML = APP_DATA.schemes.map(scheme => `
    <div class="scheme-card">
      <div class="scheme-header">
        <div class="scheme-icon">${scheme.icon}</div>
        <div class="scheme-title">
          <div class="scheme-name">${scheme.name}</div>
          <div class="scheme-name-hindi">${scheme.name_hindi}</div>
        </div>
      </div>
      <div class="scheme-benefit">
        ${state.currentLanguage === 'en' ? scheme.benefit_en : scheme.benefit_hi}
      </div>
      <div class="scheme-eligibility">
        <strong>${state.currentLanguage === 'en' ? 'Eligibility:' : 'पात्रता:'}</strong>
        ${state.currentLanguage === 'en' ? scheme.eligibility_en : scheme.eligibility_hi}
      </div>
      <div class="scheme-actions">
        <button class="btn btn--primary" onclick="applyScheme('${scheme.name}')">
          <span data-en="Apply Now" data-hi="अभी आवेदन करें">Apply Now</span>
        </button>
        <span class="scheme-status ${scheme.status}">
          ${scheme.status === 'not-applied' ? 'Not Applied' : scheme.status}
        </span>
      </div>
    </div>
  `).join('');
}

function applyScheme(schemeName) {
  showToast(state.currentLanguage === 'en' ? 
    `Application submitted for ${schemeName}` : 
    `${schemeName} के लिए आवेदन जमा किया गया`);
}

// Community Module
function initCommunity() {
  const postsList = document.getElementById('posts-list');
  
  function renderPosts() {
    postsList.innerHTML = APP_DATA.communityPosts.map(post => {
      const initials = post.author.split(' ').map(n => n[0]).join('');
      const content = state.currentLanguage === 'en' ? post.content_en : post.content_hi;
      
      return `
        <div class="post-card">
          <div class="post-header">
            <div class="post-avatar">${initials}</div>
            <div class="post-author-info">
              <div class="post-author">${post.author}</div>
              <div class="post-meta">${post.village} • ${post.time}</div>
            </div>
          </div>
          <div class="post-content">${content}</div>
          <div class="post-stats">
            <div class="post-stat">💬 ${post.replies} ${state.currentLanguage === 'en' ? 'replies' : 'जवाब'}</div>
            <div class="post-stat">❤️ ${post.likes} ${state.currentLanguage === 'en' ? 'likes' : 'लाइक'}</div>
          </div>
        </div>
      `;
    }).join('');
  }
  
  renderPosts();
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderPosts();
    });
  });
}

// Farm Management Module
function initFarm() {
  const farmForm = document.getElementById('farm-form');
  const farmSetup = document.getElementById('farm-setup');
  const farmDashboard = document.getElementById('farm-dashboard');
  
  farmForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const village = document.getElementById('farm-village').value;
    const area = document.getElementById('farm-area').value;
    const irrigation = document.getElementById('farm-irrigation').value;
    const soil = document.getElementById('farm-soil').value;
    
    const selectedCrops = Array.from(document.querySelectorAll('.crops-checkboxes input:checked'))
      .map(cb => cb.value);
    
    showLoading(state.currentLanguage === 'en' ? 'Saving profile...' : 'प्रोफाइल सहेजी जा रही है...');
    
    setTimeout(() => {
      hideLoading();
      farmSetup.style.display = 'none';
      farmDashboard.style.display = 'flex';
      
      document.getElementById('farm-info-title').textContent = `${village} Farm`;
      document.getElementById('farm-stat-area').textContent = `${area} hectares`;
      document.getElementById('farm-stat-crops').textContent = selectedCrops.join(', ');
      document.getElementById('farm-stat-soil').textContent = soil;
      
      // Render activities
      const activitiesList = document.getElementById('farm-activities');
      activitiesList.innerHTML = APP_DATA.farmActivities.map(activity => `
        <div class="activity-item">
          <div class="activity-date">${activity.date}</div>
          <div class="activity-text">
            ${state.currentLanguage === 'en' ? activity.activity_en : activity.activity_hi}
          </div>
        </div>
      `).join('');
      
      showToast(state.currentLanguage === 'en' ? 'Farm profile saved!' : 'खेत प्रोफाइल सहेजी गई!');
    }, 1500);
  });
}

// Navigation
function initNavigation() {
  // Feature cards navigation
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
      const view = this.dataset.view;
      switchView(view);
    });
  });
  
  // Bottom navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      const view = this.dataset.view;
      if (view) {
        switchView(view);
      }
    });
  });
  
  // Profile navigation - show deployment info
  document.getElementById('profile-nav').addEventListener('click', () => {
    const deploymentInfo = document.getElementById('deployment-info');
    if (deploymentInfo) {
      deploymentInfo.style.display = 'flex';
      deploymentInfo.classList.add('show');
    }
  });
  
  // Close deployment info when clicking outside
  document.getElementById('deployment-info').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      this.classList.remove('show');
    }
  });
  
  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = this.dataset.back;
      switchView(target);
    });
  });
  
  // Language toggle
  document.getElementById('lang-toggle-btn').addEventListener('click', switchLanguage);
  
  // Offline mode toggle
  document.getElementById('offline-mode-toggle').addEventListener('change', function() {
    state.offlineMode = this.checked;
    
    if (state.offlineMode) {
      const banner = document.createElement('div');
      banner.className = 'offline-banner';
      banner.id = 'offline-banner';
      banner.innerHTML = state.currentLanguage === 'en' ? 
        '📡 Offline Mode - Showing cached data' : 
        '📡 ऑफलाइन मोड - संग्रहीत डेटा दिखाया जा रहा है';
      document.querySelector('.app-header').after(banner);
      showToast(state.currentLanguage === 'en' ? 'Offline mode enabled' : 'ऑफलाइन मोड सक्षम');
    } else {
      const banner = document.getElementById('offline-banner');
      if (banner) banner.remove();
      showToast(state.currentLanguage === 'en' ? 'Online mode enabled' : 'ऑनलाइन मोड सक्षम');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('🌾 AgroSakha - Farmer Alert App Initialized');
  console.log('📍 Location: Harda, Madhya Pradesh');
  
  initAuth();
  initNavigation();
  
  // Welcome message
  setTimeout(() => {
    const welcomeMsg = state.currentLanguage === 'en' ? 
      'Welcome to AgroSakha! Your farming companion.' : 
      'AgroSakha में आपका स्वागत है! आपका खेती साथी।';
    console.log(welcomeMsg);
  }, 1000);
});