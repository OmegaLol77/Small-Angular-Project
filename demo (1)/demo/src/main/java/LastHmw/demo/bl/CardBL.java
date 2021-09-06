package LastHmw.demo.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import LastHmw.demo.beans.Card;
import LastHmw.demo.repositories.CardRepository;

@Service
public class CardBL {
	
	@Autowired
	CardBL cardBL;
	
	@Autowired
	CardRepository cardRepo;

	public List<Card> getAllCards() {
		return cardRepo.findAll();
	}
}
