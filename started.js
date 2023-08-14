function showAnimation () {
    document.body.progress.color('loading');
  }
  
  document.querySelectorAll('a href').forEach(a => a.addEventListener('complete', showAnimation))