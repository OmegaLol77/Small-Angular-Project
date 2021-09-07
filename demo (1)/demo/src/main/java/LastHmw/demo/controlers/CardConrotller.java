package LastHmw.demo.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LastHmw.demo.beans.Card;
import LastHmw.demo.bl.CardBL;

@RestController
@RequestMapping("card")
@CrossOrigin
public class CardConrotller {
	
	@Autowired
	CardBL cardBL;
	
	@GetMapping("getAllCards")
	public List<Card> getAllCards(){
		return cardBL.getAllCards();
	}
	@PostMapping("createCard")
	public boolean createCard(@RequestBody Card card){
		return cardBL.createCard(card);
	}
	@DeleteMapping("/{id}/deleteCard")
	public boolean deleteCard(@PathVariable("id") Integer id) {
		return cardBL.deleteCard(id);
	}
	@PutMapping("/{id}/updateCard")
	public boolean updateCard(@RequestBody Card card) {
		return cardBL.updateCard(card);
	}
}
