import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class VerifyingInteractionsTest {
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        
        service.fetchData();
        
        verify(mockApi).getData();
    }
}
