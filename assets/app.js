/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
 import './bootstrap';
window.$ = window.jQuery = require('jquery'); //changed
//require('bootstrap');
// require('datatables.net-bs4');
import "/public/plugins/datatables/jquery.dataTables.min";
import "/public/plugins/datatables-bs4/js/dataTables.bootstrap4.min";
$(document).ready(function() {
 $("table.tb-liste").DataTable({
    "responsive": true,
    "autoWidth": false,
    "searching": true,
    "processing": true, 
    'order' : [],
    "language": {
          "url": "/plugins/bootstrap/js/french.json"
      },
      "info":false,
      "paging":true,
      "lengthChange": true
    
  });
 });


