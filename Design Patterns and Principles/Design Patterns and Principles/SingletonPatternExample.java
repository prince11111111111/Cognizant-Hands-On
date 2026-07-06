class Logger {
    private static Logger instance;

    private Logger() {
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println(message);
    }
}

public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 are the same instance. Singleton pattern implemented successfully.");
        } else {
            System.out.println("logger1 and logger2 are different instances. Singleton pattern implementation failed.");
        }
        
        logger1.log("Testing logger instance 1");
        logger2.log("Testing logger instance 2");
    }
}
