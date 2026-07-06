public class FinancialForecasting {
    
    public static double calculateFutureValue(double presentValue, double growthRate, int periods) {
        if (periods == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, periods - 1);
    }
    
    public static void main(String[] args) {
        double presentValue = 1000.0;
        double growthRate = 0.05; 
        int periods = 10;
        
        double futureValue = calculateFutureValue(presentValue, growthRate, periods);
        System.out.printf("%.2f\n", futureValue);
    }
}
