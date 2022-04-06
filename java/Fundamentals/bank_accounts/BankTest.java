public class BankTest {
    public static void main(String[] args) {
        
        BankAccount acc1 = new BankAccount();
        BankAccount acc2 = new BankAccount();
        acc1.transaction("deposit", "checking", 500);
        acc1.transaction("deposit", "savings", 500);
        acc1.transaction("withdrawal", "savings", 600);
        System.out.println("There are " + BankAccount.numOfAccounts +" objects in this class");
    }
}
