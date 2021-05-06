package fileBoard;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;


@WebServlet("/getFileServlet")
public class GetFileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public GetFileServlet() {
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String num = request.getParameter("num");
		int fileNum = Integer.parseInt(num); 	//string값의 num을 숫자inttype으로 
		
		response.setCharacterEncoding("UTF-8");
		
		FileDAO dao = new FileDAO();
		FileVO vo = dao.getFile(fileNum);
		
		JSONObject obj = new JSONObject();
		obj.put("num", vo.getNum());
		obj.put("title", vo.getTitle());
		obj.put("author", vo.getAuthor());
		obj.put("fileName", vo.getFileName());
		obj.put("day", vo.getDay());
		
		response.getWriter().print(obj);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}

}
