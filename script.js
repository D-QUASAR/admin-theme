function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}
      function closeWindow() {
        window.open('','_parent','');
        window.close();
    }
 