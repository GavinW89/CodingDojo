public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripPrice = 4.2;
        double lattePrice = 5;
        double cappuccinoPrice = 6;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Gavin";
        String customer3 = "Kevin";
        String customer4 = "Matty";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer3); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer4); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + pendingMessage);
        if(isReadyOrder4){
            System.out.println(customer4 + readyMessage);
            System.out.println(customer4 + displayTotalMessage + cappuccinoPrice);
        }
        else{
            System.out.println(customer4 + pendingMessage);
        }
        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage);
            double total = lattePrice*2;
            System.out.println(customer2 + displayTotalMessage + total);
        }
        else{
            System.out.println(customer2 + pendingMessage);
        }
        double kevinDifference = lattePrice - mochaPrice;
        System.out.println(customer3 + displayTotalMessage + kevinDifference);
    }
}

