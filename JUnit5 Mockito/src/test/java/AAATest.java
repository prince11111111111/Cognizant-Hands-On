import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;

public class AAATest {
    private int startValue;

    @Before
    public void setUp() {
        startValue = 10;
    }

    @After
    public void tearDown() {
        startValue = 0;
    }

    @Test
    public void testAdditionUsingAAA() {
        int addend = 5;
        
        int result = startValue + addend;
        
        assertEquals(15, result);
    }
}
