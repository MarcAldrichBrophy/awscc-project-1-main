//...
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'out', 'index.html')); 
  });