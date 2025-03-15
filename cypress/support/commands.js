Cypress.on('certificate:error', (event, systemCertificates, chains) => {
    event.preventDefault();
});

import 'cypress-file-upload';
import 'cypress-iframe';

