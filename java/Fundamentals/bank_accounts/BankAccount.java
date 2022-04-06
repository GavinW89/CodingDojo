import java.util.ArrayList;
public class BankAccount {
    

    private double checkingBal;
    private double savingsBal;

    //Need to Track total amount of accoutns
    public static int numOfAccounts;

    //need to track all money stored in every account created
    static double totalMonies;


    public BankAccount(){
        // Track all accounts as they are created
        numOfAccounts ++;
        
    }

    // **************** Getters and Setters *******************


    //Method to deposit or withdrawl money from checkings or savings
    public void transaction(String type, String account, int amt) {
        if(type == "deposit"){
            if(account == "checking") {
                this.checkingBal += amt;
                System.out.println("You have made a deposit to your checking account in the amount of " + amt + ". Your current checking balance is now " + this.checkingBal);
            }else if(account == "savings"){
                this.savingsBal += amt;
                System.out.println("You have made a deposit to your savings account in the amount of " + amt + ". Your current savings balance is now " + this.savingsBal);
            }else{
                System.out.println("Must enter either checking or savings to make a deposit!");
            }
        }else if(type == "withdrawal"){
            totalMonies -= amt;
            if(account == "checking") {
                if(this.checkingBal < amt){
                    System.out.println("Nuh uh, you cant do that!");
                    return;
                }

                this.checkingBal -= amt;
                System.out.println("You have made a withdrawal from your checking account in the amount of " + amt + ". Your current checking balance is now " + this.checkingBal);
            }else if(account == "savings"){
                if(this.savingsBal < amt){
                    System.out.println("Nuh uh, you cant do that!");
                    return;
                }
                this.savingsBal -= amt;
                System.out.println("You have made a withdrawal from your savings account in the amount of " + amt + ". Your current savings balance is now " + this.savingsBal);
            }else{
                System.out.println("Must enter either checking or savings to make a withdrawl!");
            }
        }else{
            System.out.println("Must enter either deposit or withdrawal to make a withdrawl!");

        }
    }

    public void setCheckingBal(double amt) {
        this.checkingBal += amt;
        totalMonies += amt;
    }

    public void setSavingsBal(double amt){
        this.savingsBal = amt;
        totalMonies += amt;
    }

    //Getter for the checking bal
    public double getCheckingBal(){
        System.out.println("Checkings account balance" + this.checkingBal);
        return this.checkingBal;
    }

    //Getter for the savings bal
    public double getSavingsBal() {
        System.out.println("Savings account balance" + this.savingsBal);
        return this.savingsBal;
    }

    //Method to see both checking and savings bal
    public void allBal() {
        double all = this.savingsBal + this.checkingBal;
        System.out.println("Total balance from both Checking and Savings:" + all);
    }
}
