Feature: Example
 Scenario: should navigate to the main page
   When I navigate to "http://localhost:4200/dashboard"
   Then the title should be "BanavanWeb"
 
Scenario: should be able to see the Register User pop-up
   When I navigate to "http://localhost:4200/dashboard"
   When I click the Agregar Personal button
   Then I should see a "Registrar Personal" button

Scenario: should be able to see Solicitudes page
   When I navigate to "http://localhost:4200/dashboard"
   When I click the Solicitudes on the sidebar
   Then the title h1 should be "Solicitudes"

Scenario: should be able to see Respaldo page
   When I navigate to "http://localhost:4200/dashboard"
   When I click the Respaldo on the sidebar
   Then the h1 should be "Respaldo de Datos"
