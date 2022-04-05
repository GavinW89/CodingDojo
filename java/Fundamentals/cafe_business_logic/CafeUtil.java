import java.util.ArrayList;
public class CafeUtil {

    public int getStreakGoal(int numWeeks) {
        int goal = 0;
        for(int i = 0; i <= numWeeks; i++){
            goal += i;
        }
        return goal;
    }

    public double getOrderTotal(double[] prices){
        double total = 0;
        for(double price: prices){
            total += price;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for(String item: menuItems){
            System.out.println(item);
        }
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please Enter Your Name:");
        String userName = System.console().readLine();
        System.out.println("Hello," + userName);
        System.out.println(String.format("There are %s people in front of you", customers.size()));
        customers.add(userName);
    }
}
