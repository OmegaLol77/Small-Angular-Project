package LastHmw.demo.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
	public boolean createCard(@RequestBody String jsonCard){
		return cardBL.createCard(jsonCard);
	}
	@DeleteMapping("deleteCard")
	public boolean deleteCard(int id) {
		return cardBL.deleteCard(id);
	}
	@PutMapping("updateCard")
	public boolean updateCard(int id,String title,String body,int priority,boolean flag) {
		return cardBL.updateCard(id,title,body,priority,flag);
	}
}
