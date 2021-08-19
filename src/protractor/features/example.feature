Feature: Go to page
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
      Then the Backup button should be "Realizar respaldo"

   Scenario: should be able to edit ribbon
         When I navigate to "http://localhost:4200/dashboard/cinta"
         When I click the Edit on the first row on table in Ribbon Table
         Then the button save should be "save"
         Then the button cancel should be "close-circle"
         Then the color input should be "Amarillo"

   Scenario: should be able to show reports of harvested bunches
         When I navigate to ReporteRacimo "http://localhost:4200/dashboard/inventarioRacimos"
         Then the title should show the present year "Reporte racimos cosechados por semana - 2021"
         Then the Racimo graphic should be "graphic-harvested-bunches chartjs-render-monitor"
         Then the name of the filter button should be "Filtrar"

   Scenario: should be able to show reports of harvested bunches
         When I navigate to ReporteEnfundado "http://localhost:4200/dashboard/enfunde"
         Then the title should show the present year "Reporte enfundados por semana - 2021"
         Then the Enfundado graphic should be "graphic-sheated-bunches chartjs-render-monitor"
         Then the name of the filter button should be "Filtrar"
         Then the name of the filter text should be "Filtro por año:"