package LastHmw.demo.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

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
	
	public boolean createCard(String jsonCard) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Card card = mapper.readValue(jsonCard, Card.class);
			cardRepo.save(card);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean deleteCard(int id) {
		try {
			cardRepo.deleteById(id);
			return true;
		}catch(Exception e) {
			return false;
		}
	}

	public boolean updateCard(int id,String title, String body, int priority, boolean flag) {
		try {
			Card card = cardRepo.getById(id);
			card.setBody(body);
			card.setPriority(priority);
			card.setReadFlag(flag);
			card.setTitle(title);
			cardRepo.save(card);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
}
