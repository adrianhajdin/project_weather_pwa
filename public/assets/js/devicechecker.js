const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    }
    else if (/iPad|iPhone|iPod/.test(ua))
       || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1){
      return "iOS"
    }
    return "Other"
  }