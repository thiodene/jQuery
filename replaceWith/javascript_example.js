      <script type="text/javascript">

        $(function()
        {

          // ****************** Set as Manually Scheduled ********************
          $(document).on("click","#btn_wo_manual_schedule",function()
          {
            
            // Build the prog to set each selected work order as manually scheduled
            prog  = '   $new_rec = array() ;' 
                  + '\n $new_rec[\'MANUAL_SCHEDULE\'] = YES ;'
                  + '\n $do_record = new doRecord("WO_ITEM") ;' 
                  + '\n $do_record -> new_record = $new_rec ;' ;
            $(".box_picked").each(function()
            {
              // Get the Wo_item_id from each operation and build the update query
              wo_item_id = $(this).attr("wo_item_id") ;
              prog += '\n $do_record -> id_column_val = ' + wo_item_id + ' ;' 
                   +  '\n $do_record -> updateRecord() ;' ;
              
              // Add the M (Manual) icon to each relevant rows
              parent_wrap = $(this).parent().parent() ;
              manual_sched_status = '<div class="manually_scheduled" title="Manual Schedule">M</div>' ;
              parent_wrap.find(".manual_sch").replaceWith(manual_sched_status) ;
            }) ; // each picked box
            
            prog += '\n unset($new_rec) ;' 
                  + '\n unset($do_record) ;' 
            
            runBackEndProg(prog) ;
            
          }) ; // Set as manually scheduled 
          
        }) ; // document.ready
        
      </script> 
